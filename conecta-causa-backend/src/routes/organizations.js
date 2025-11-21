/**
 * @openapi
 * tags:
 *   name: Organizations
 *   description: Endpoints de organizações
 */

const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const controller = require('../controllers/organizationController');

/**
 * @openapi
 * /api/organizations:
 *   post:
 *     tags: [Organizations]
 *     summary: Criar nova organização
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Organização criada
 */
router.post('/', auth, controller.create);

/**
 * @openapi
 * /api/organizations/{id}:
 *   get:
 *     tags: [Organizations]
 *     summary: Buscar organização por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Dados da organização
 */
router.get('/:id', controller.get);

/**
 * @openapi
 * /api/organizations/{id}:
 *   put:
 *     tags: [Organizations]
 *     summary: Atualizar organização
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Organização atualizada
 */
router.put('/:id', auth, controller.update);

module.exports = router;
