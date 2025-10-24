import Status from '../schemas/status-schema.js';

export const getAllStatuses = async (res) => {

    const statuses = await Status.find({});
    return res.status(200).send({
        message: 'Reserve statuses',
        data: statuses
    })
}

export const createStatus = async (name, res) => {

    try {
        await Status.create({
            name: name
        });
        res.status(201).send({ 
            message: 'Status created successfully' 
        });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error creating status', error: error.message 
        });
    }
}

export const updateStatus = async (id, name, res) => {

    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }
    
    try {
        const status = await Status.findOneAndUpdate({ id: id }, { name: name });
        if(!status) {
            return res.status(404).send({
                message: 'Status not found'
            });
        }
        return res.status(200).send({
            message: 'Status updated successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error updating status', error: error.message
        });
    }
}

export const deleteStatus = async (id, res) => {
    
    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }

    try {
        const status = await Status.findOneAndDelete({ id: id });
        if(!status) {
            return res.status(404).send({
                message: 'Status not found'
            });
        }
        return res.status(200).send({
            message: 'Status deleted successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error deleting status', error: error.message
        });
    }
};