const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Terms and Conditions
const returnPolicySchema = new Schema({
content: {
    type: String,
    required: true,
  } 
} , 
{
    timestamps: true
});

export default mongoose.models.ReturnPolicy || mongoose.model('ReturnPolicy' , returnPolicySchema)