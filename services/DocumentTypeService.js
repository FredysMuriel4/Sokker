import documentType from "../schemas/DocumentType.js";

export const allDocumentTypes = async () => {

    return await documentType.find({});
}

export const storeDocumentType = async (name) => {

    return await documentType.create({ name: name });
}

export const getDocumentTypeById = async (id) => {

    id = parseInt(id, 10);
    return await documentType.findOne({ id: id });
}