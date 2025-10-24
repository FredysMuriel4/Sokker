import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const roleSchema = new mongoose.Schema({
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

roleSchema.plugin(AutoIncrement(mongoose), { inc_field: "id" });

const role = mongoose.model("Role", documentTypeSchema);

export default role;