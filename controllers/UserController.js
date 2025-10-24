import User from '../schemas/User.js';
import { getDocumentTypeById } from '../services/DocumentTypeService.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async (res) => {

    const users = await User.find({});
    return res.status(200).send({
        message: 'Users',
        data: users
    });
}

export const createUser = async (body, res) => {

    const documentTypeId = body.documentTypeId;
    const documentType = await getDocumentTypeById(documentTypeId);

    try {
        await User.create({
            first_name: body.firstName,
            last_name: body.lastName,
            document_type: documentType,
            document_number: body.documentNumber,
            email: body.email,
            phone_number: body.phoneNumber,
            password: await hashPassword(body.password),
            role: body.role
        });
        res.status(201).send({ 
            message: 'User created successfully' 
        });
    } catch (error) {
        res.status(500).send({ 
            message: 'Error creating user', error: error.message 
        });
    }
}

export const updateUser= async (id, body, res) => {

    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }

    const documentTypeId = body.documentTypeId;
    const documentType = await getDocumentTypeById(documentTypeId);

    try {
        const status = await User.findOneAndUpdate({ id: id }, {
            first_name: body.firstName,
            last_name: body.lastName,
            document_type: documentType,
            document_number: body.documentNumber,
            email: body.email,
            phone_number: body.phoneNumber,
            password: await hashPassword(body.password),
            role: body.role
        });
        if(!status) {
            return res.status(404).send({
                message: 'User not found'
            });
        }
        return res.status(200).send({
            message: 'User updated successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error updating user', error: error.message
        });
    }
}

export const deleteUser = async (id, res) => {
    
    if(!parseInt(id, 10)) {
        return res.status(400).send({
            message: 'Invalid ID format'
        });
    }

    try {
        const user = await User.findOneAndDelete({ id: id });
        if(!user) {
            return res.status(404).send({
                message: 'User not found'
            });
        }
        return res.status(200).send({
            message: 'User deleted successfully'
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Error deleting user', error: error.message
        });
    }
};

const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};