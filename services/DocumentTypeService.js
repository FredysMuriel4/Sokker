import documentType from "../schemas/DocumentType.js";

export const getDocumentTypeById = async (id) => {

    id = parseInt(id, 10);

    return await documentType.findOne({ id: id });

}