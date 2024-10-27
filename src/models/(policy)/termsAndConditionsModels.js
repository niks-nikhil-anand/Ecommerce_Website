const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Terms and Conditions
const termsAndConditionsSchema = new Schema({
content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  } 
} , 
{
    timestamps: true
});





export default mongoose.models.TermsAndConditions || mongoose.model('TermsAndConditions' , termsAndConditionsSchema)
