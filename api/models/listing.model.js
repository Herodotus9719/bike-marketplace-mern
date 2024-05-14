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
            required: false,
        },
        tuned: {
            type: Boolean,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        wheels: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        parkingLock: {
            type: Boolean,
            required: true
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
