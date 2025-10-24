import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const documentTypeSchema = new mongoose.Schema({
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

documentTypeSchema.plugin(AutoIncrement(mongoose), { inc_field: "id" });

const documentType = mongoose.model("DocumentType", documentTypeSchema);

export default documentType;