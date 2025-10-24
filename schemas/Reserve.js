import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
import User from "./User.js";
import Field from "./field-schema.js";
import Status from "./ReserveStatus.js";

const reserveSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Field,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Status,
        required: true
    }
}, {
    timestamps: true
});

reserveSchema.plugin(AutoIncrement(mongoose), { inc_field: 'id' });

const reserve = mongoose.model("Reserve", reserveSchema);

export default reserve;