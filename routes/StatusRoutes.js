import express from 'express';
import { createStatus, getAllStatuses, updateStatus, deleteStatus } from '../controllers/StatusController.js';

const router = express.Router();

router.get('/', async (req, res) => {

    return await getAllStatuses(res);
});

/* router.get('/:id', async (req, res) => {

    const id  = req.params.id;

    return await getStatus(id, res);
}); */

router.post('/create', async (req, res) => {

    const { name } = req.body;

    return await createStatus(name, res);
});

router.put('/update/:id', async (req, res) => {

    const id  = req.params.id;
    const { name } = req.body;

    return await updateStatus(id, name, res);
});

router.delete('/delete/:id', async (req, res) => {

    const id  = req.params.id;
    return await deleteStatus(id, res);
});

export default router;