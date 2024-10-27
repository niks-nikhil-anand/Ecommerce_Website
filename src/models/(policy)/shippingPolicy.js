const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Terms and Conditions
const shippingPolicySchema = new Schema({
content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  } 
} , 
{
    timestamps: true
});

export default mongoose.models.ShippingPolicy || mongoose.model('ShippingPolicy' , shippingPolicySchema)
