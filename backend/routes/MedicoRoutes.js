const express = require('express');
const medicoController = require('../controllers/MedicoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', medicoController.index);
router.post('/', medicoController.create);
router.put('/:id', medicoController.update);
router.delete('/:id', medicoController.delete);

module.exports = router;
