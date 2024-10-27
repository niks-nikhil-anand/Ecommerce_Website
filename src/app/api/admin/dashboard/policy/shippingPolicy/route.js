import connectDB from "@/lib/dbConnect";
import ShippingPolicy from "@/models/(policyModels)/shippingPolicy"; // Renamed the import for clarity
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
      return NextResponse.json({ msg: "Please provide the shipping policy content." }, { status: 400 });
    }

    await ShippingPolicy.updateOne({}, { $set: { content } }, { upsert: true });

    console.log("Shipping policy updated successfully.");
    return NextResponse.json({ msg: "Shipping policy updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating shipping policy:", error);
    return NextResponse.json({ msg: "Error updating shipping policy", error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database.");

    const policy = await ShippingPolicy.findOne(); // Renamed variable to avoid conflict
    console.log("Fetched shipping policy:", policy);
    return NextResponse.json(policy, { status: 200 });
  } catch (error) {
    console.error("Error fetching shipping policy:", error);
    return NextResponse.json({ msg: "Error fetching shipping policy", error: error.message }, { status: 500 });
  }
};
