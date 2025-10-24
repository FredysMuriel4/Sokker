import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
import User from "./user-schema.js";

const fieldSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    }
}, {
    timestamps: true
});

fieldSchema.plugin(AutoIncrement(mongoose), { inc_field: "id" });

const field = mongoose.model("Field", fieldSchema);

export default field;
