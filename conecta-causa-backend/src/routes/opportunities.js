/**
 * @openapi
 * tags:
 *   name: Opportunities
 *   description: Endpoints de oportunidades de voluntariado
 */

const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const controller = require('../controllers/opportunityController');

/**
 * @openapi
 * /api/opportunities:
 *   post:
 *     tags: [Opportunities]
 *     summary: Criar nova oportunidade
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Oportunidade criada
 */
router.post('/', auth, controller.create);

/**
 * @openapi
 * /api/opportunities:
 *   get:
 *     tags: [Opportunities]
 *     summary: Listar oportunidades com paginação e filtros
 *     responses:
 *       200:
 *         description: Lista de oportunidades
 */
router.get('/', controller.list);

/**
 * @openapi
 * /api/opportunities/match:
 *   get:
 *     tags: [Opportunities]
 *     summary: Listar oportunidades por afinidade com o usuário logado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista ordenada por score
 */
router.get('/match', auth, controller.match);

/**
 * @openapi
 * /api/opportunities/{id}/apply:
 *   post:
 *     tags: [Opportunities]
 *     summary: Aplicar para uma oportunidade
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       201:
 *         description: Candidatura criada
 */
router.post('/:id/apply', auth, controller.apply);

module.exports = router;
