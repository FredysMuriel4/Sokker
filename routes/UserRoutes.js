import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', async (req, res) => {

    return await getAllUsers(res);
});

router.post('/create', async (req, res) => {

    const body = req.body;

    return await createUser(body, res);
});

router.put('/update/:id', async (req, res) => {

    const id = req.params.id;
    const body = req.body;  

    return await updateUser(id, body, res);
});

router.delete('/delete/:id', async (req, res) => {

    const id = req.params.id;
    return await deleteUser(id, res);
});

export default router;