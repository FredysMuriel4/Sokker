import DocumentType from '../schemas/DocumentType.js';

export const getAllDocumentTypes = async (res) => {

    const documentTypes = await DocumentType.find({});
    return res.status(200).send({
        message: 'Document types',
        data: documentTypes
    });
}

export const createDocumentType = async (name, res) => {

    try {
        await DocumentType.create({
            name: name
        });
        res.status(201).send({ 
            message: 'Document type created successfully' 
        });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error creating document type', error: error.message 
        });
    }
};

export const updateDocumentType = async (id, name, res) => {

    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }

    try {
        const documentType = await DocumentType.findOneAndUpdate({ id: id }, { name: name });
        if(!documentType) {
            return res.status(404).send({
                message: 'Document type not found'
            });
        }
        return res.status(200).send({
            message: 'Document type updated successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error updating document type', error: error.message
        });
    }
}

export const deleteDocumentType = async (id, res) => {

    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }

    try {
        const documentType = await DocumentType.findOneAndDelete({ id: id });
        if(!documentType) {
            return res.status(404).send({
                message: 'Document type not found'
            });
        }
        return res.status(200).send({
            message: 'Document type deleted successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error deleting document type', error: error.message
        });
    }
}