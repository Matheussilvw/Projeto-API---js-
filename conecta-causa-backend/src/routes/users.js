/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Endpoints do usuário logado
 */

const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const controller = require('../controllers/userController');

/**
 * @openapi
 * /api/users/me:
 *   get:
 *     tags: [Users]
 *     summary: Retorna os dados do usuário logado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário
 */
router.get('/me', auth, controller.me);

/**
 * @openapi
 * /api/users/my-applications:
 *   get:
 *     tags: [Users]
 *     summary: Lista de inscrições do usuário logado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de inscrições
 */
router.get('/my-applications', auth, controller.myApplications);

module.exports = router;
