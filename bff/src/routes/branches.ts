import { Router } from 'express';
import { branchData } from  '../data/branches';

const router = Router()

router.get('/branches', (req, res) => {
    res.json(branchData)
})

router.get('/branches/:id', (req, res) => {
    const branch = branchData.find(b => b.id === req.params.id)

    if (branch) {
        res.json(branch)
    } else {
        res.status(404).json({ message: 'Branch not found' })
    }
})

export default router