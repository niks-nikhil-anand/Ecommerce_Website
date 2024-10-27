import connectDB from "@/lib/dbConnect";
import privacyPolicyModels from "@/models/(policy)/privacyPolicyModels";
import returnPolicyModels from "@/models/(policy)/returnPolicyModels";
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
      return NextResponse.json({ msg: "Please provide the return policy content." }, { status: 400 });
    }

    await returnPolicyModels.updateOne({}, { $set: { content } }, { upsert: true });

    console.log("Return policy updated successfully.");
    return NextResponse.json({ msg: "Return policy updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating return policy:", error);
    return NextResponse.json({ msg: "Error updating return policy", error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
    try {
      console.log("Connecting to the database...");
      await connectDB();
      console.log("Connected to the database.");
  
      const privacyPolicy = await privacyPolicyModels.findOne(); 
      console.log("Fetched privacy policy:");
      return NextResponse.json(privacyPolicy, { status: 200 });
    } catch (error) {
      console.error("Error fetching privacy policy:", error);
      return NextResponse.json({ msg: "Error fetching privacy policy", error: error.message }, { status: 500 });
    }
  };
  
