import connectDB from "@/lib/dbConnect";
import termsAndConditionsModels from "@/models/(policy)/termsAndConditionsModels";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database.");

    const formData = await req.formData();
    console.log("Form data received.");

    const content = formData.get("content");

    if (!content) {
      console.error("Missing required fields.");
      return NextResponse.json({ msg: "Please provide the terms and conditions content." }, { status: 400 });
    }
    
    await termsAndConditionsModels.updateOne({}, { $set: { content } }, { upsert: true });

    console.log("Terms and conditions updated successfully.");
    return NextResponse.json({ msg: "Terms and conditions updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating terms and conditions:", error);
    return NextResponse.json({ msg: "Error updating terms and conditions", error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database.");

    const termsAndConditions = await termsAndConditionsModels.findOne();
    
    if (!termsAndConditions) {
      console.error("No terms and conditions found.");
      return NextResponse.json({ msg: "No terms and conditions found." }, { status: 404 });
    }

    console.log("Fetched terms and conditions:");
    return NextResponse.json(termsAndConditions, { status: 200 });
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return NextResponse.json({ msg: "Error fetching terms and conditions", error: error.message }, { status: 500 });
  }
};
