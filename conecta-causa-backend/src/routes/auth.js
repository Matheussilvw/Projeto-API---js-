/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticação
 */

const router = require('express').Router();
const controller = require('../controllers/authController');

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Registrar usuário
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/register', controller.register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Fazer login
 *     responses:
 *       200:
 *         description: Token JWT
 */
router.post('/login', controller.login);

module.exports = router;
