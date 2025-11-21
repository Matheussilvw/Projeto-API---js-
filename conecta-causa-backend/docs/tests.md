# Running tests

Before running tests, ensure the DB exists and migrations were run (or tests will attempt local connections).
You can run:
```bash
cp .env.example .env
# create DB
mysql -u root < sql/init_db.sql
npm ci
npm run migrate
npm test
```
