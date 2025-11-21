# Conecta Causa - Backend

API backend implemented in Node.js (LTS) using Express and MySQL (no Docker).
Follow these steps to run locally.

## Requisitos
- Node.js (LTS)
- MySQL local (root user, empty password as requested)

## Passos rápidos

1. Copie `.env.example` para `.env` e ajuste se necessário.
```bash
cp .env.example .env
```

2. Crie o banco local (MySQL root sem senha):
```bash
# No terminal MySQL
mysql -u root -p
# quando pedir senha, apenas pressione Enter (senha vazia)
CREATE DATABASE conecta_causa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```
ou usando o script SQL:
```bash
mysql -u root < sql/init_db.sql
```

3. Instale dependências:
```bash
npm install
```

4. Execute migrations e seeders:
```bash
npm run migrate
npm run seed
```

5. Rode em modo dev:
```bash
npm run dev
```

6. Acesse documentação Swagger em: `http://localhost:3000/api-docs`

## Testes
```bash
npm test
```

## Scripts úteis
- `npm run dev` - start dev (nodemon)
- `npm start` - start production
- `npm run migrate` - run sequelize migrations
- `npm run seed` - run sequelize seeders
- `npm test` - run tests
- `npm run lint` - run eslint

## Mapping com o documento ARQ_32033_E504_20251112121315
Veja `docs/mapping.md` que descreve como cada requisito do documento foi implementado.

