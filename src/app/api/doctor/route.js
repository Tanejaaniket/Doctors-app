import Doctor from "@/models/doctor.model";
import { upload, uploadFile } from "@/utils/fileHandling";
import { NextResponse } from "next/server";

const { connectDB } = require("@/db/db");


connectDB();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;
    const modeOfConsult = searchParams.getAll("mode-of-consult");
    const experience = searchParams.getAll("experience");
    const fees = searchParams.getAll("fees");
    const language = searchParams.getAll("language");
    const facility = searchParams.getAll("facility");
    const filters = { $and: [] };

    if (modeOfConsult.length) {
      const consultationMode = [];
      if (modeOfConsult.includes("online-consult")) {
        consultationMode.push("online");
      }
      if (modeOfConsult.includes("hospital-visit")) consultationMode.push("offline");
      if (modeOfConsult.includes("hospital-visit") && modeOfConsult.includes("online-consult"))
        consultationMode.push("both");
      filters.$and.push({ availability: { $in: consultationMode } });
    }
    if (experience.length) {
      const arr = [];
      experience.forEach((exp) => {
        if (exp.includes("+")) {
          arr.push({ experience: { $gte: Number(exp.split("+")[0]) } });
          return;
        }
        exp = exp.split("-");
        arr.push({
          experience: { $gte: Number(exp[0]), $lte: Number(exp[1]) },
        });
      });
      console.log(arr);
      filters.$and.push({ $or: arr });
      console.log(filters.$and);
    }
    if (fees.length) {
      const arr = [];
      fees.forEach((fee) => {
        if (fee.includes("+")) {
          arr.push({ "fees.online": { $gte: Number(fee.split("+")[0]) } });
          arr.push({ "fees.offline": { $gte: Number(fee.split("+")[0]) } });
          return;
        }
        fee = fee.split("-");
        arr.push({
          "fees.online": { $gte: Number(fee[0]), $lte: Number(fee[1]) },
        });
        arr.push({
          "fees.offline": { $gte: Number(fee[0]), $lte: Number(fee[1]) },
        });
      });
      filters.$and.push({ $or: arr });
    }
    if (language.length) filters.$and.push({ languages: { $in: language } });
    if (facility.length) {
      const consultationMode = [];
      if (facility.includes("apollo-hospital")) {
        consultationMode.push("online");
      } else {
        consultationMode.push("offline");
      }
      if (
        facility.includes("apollo-hospital") &&
        facility.includes("other-clinics")
      )
        consultationMode.push("both");
      filters.$and.push({ availability: { $in: consultationMode } });
    }

    let doctors;
    console.log("filters", filters);
    if (filters.$and.length) {
      let pipeline = [{ $match: filters }];
      const aggregatedDoctors = Doctor.aggregate(pipeline);
      doctors = await Doctor.aggregatePaginate(aggregatedDoctors, {
        page,
        limit,
      });
    } else {
      const pipeline = [{ $sort : { createdAt: -1 }}];
      const aggregatedDoctors = Doctor.aggregate(pipeline);
      doctors = await Doctor.aggregatePaginate(aggregatedDoctors, {
        page,
        limit,
      });
    }
    return NextResponse.json(
      {
        message: "Doctors fetched successfully",
        data: doctors,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message:
          error?.message || "Something went wrong while fetching doctors",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const doctor = await Doctor.create(body);
    return NextResponse.json(
      {
        message: "Doctor created successfully",
        data: doctor,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error?.message || "Something went wrong while creating doctor",
      },
      { status: 500 }
    );
  }
}
