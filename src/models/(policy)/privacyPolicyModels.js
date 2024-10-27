const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Terms and Conditions
const privacyPolicySchema = new Schema({
content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  } 
} , 
{
    timestamps: true
});

export default mongoose.models.PrivacyPolicy || mongoose.model('PrivacyPolicy' , privacyPolicySchema)
