import { Router } from 'express'
import * as userController from '../controllers/users.controller'
const router = Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/new', userController.newUser);
router.delete('/:userId', userController.deleteUser);
router.put('/:userId', userController.updateUser);

export default router;