import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: false,
        },
        regularPrice:{
            type: Number,
            required: true,
        },
        discountPrice:{
            type: Number,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        new: {
            type: Boolean,
            required: true,
        },
        tuned: {
            type: Boolean,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
