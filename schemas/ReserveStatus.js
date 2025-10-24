import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const statusSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

statusSchema.plugin(AutoIncrement(mongoose), { inc_field: "id" });

const status = mongoose.model("ReserveStatus", statusSchema);

export default status;