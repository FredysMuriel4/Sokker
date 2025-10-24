import express from "express";
import { createDocumentType, getAllDocumentTypes, updateDocumentType, deleteDocumentType } from "../controllers/DocumentTypeController.js";

const router = express.Router();

router.get('/', async (req, res) => {

    return await getAllDocumentTypes(res);
});

router.post('/create', async (req, res) => {

    const { name } = req.body;
    return await createDocumentType(name, res);
});

router.put('/update/:id', async (req, res) => {

    const id  = req.params.id;
    const { name } = req.body;
    return await updateDocumentType(id, name, res);
});

router.delete('/delete/:id', async (req, res) => {

    const id  = req.params.id;
    return await deleteDocumentType(id, res);
});

export default router;