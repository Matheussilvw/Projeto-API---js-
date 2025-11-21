# Mapping: ARQ_32033_E504_20251112121315 -> Implementação

Resumo de onde cada requisito do documento foi implementado no projeto.

- Autenticação:
  - `POST /api/auth/register` -> `src/routes/auth.js` / `src/controllers/authController.js`
  - `POST /api/auth/login` -> same
  - `GET /api/users/me` -> `src/routes/users.js` / `src/controllers/userController.js`

- Organizações:
  - `POST /api/organizations` -> `src/routes/organizations.js`
  - `GET /api/organizations/:id` -> same
  - `PUT /api/organizations/:id` -> same

- Oportunidades:
  - `POST /api/opportunities` -> `src/routes/opportunities.js`
  - `GET /api/opportunities` -> list + pagination + filters
  - `GET /api/opportunities/match` -> matchmaking algorithm in `src/services/matchService.js`

- Inscrições:
  - `POST /api/opportunities/:id/apply` -> `src/routes/opportunities.js`
  - `GET /api/users/my-applications` -> `src/routes/users.js`

- Segurança:
  - JWT middleware: `src/middlewares/authMiddleware.js`
  - Password hashing with bcrypt: `src/services/authService.js`

- Migrations/Seeders:
  - `migrations/` and `seeders/` folders included.
  - Run `npm run migrate` and `npm run seed`.

- Swagger:
  - Configured at `/api-docs` in `src/index.js`.

- Tests:
  - `tests/` contains Jest + Supertest tests for core flows.

- Logging:
  - `src/config/logger.js` using Winston.

