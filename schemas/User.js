import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
import DocumentType from "./DocumentType.js";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    document_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DocumentType,
        required: true
    },
    document_number: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer',
        required: true
    }
}, {
    timestamps: true
});

userSchema.plugin(AutoIncrement(mongoose), { inc_field: "id", id: "User_id" });

const user = mongoose.model("User", userSchema);

export default user;