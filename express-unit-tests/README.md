# express-unit-tests

- `yarn`
- 1 terminal tab: `yarn dev`
- 1 terminal tab: `yarn test --watchAll`
- Change property names or array lengths in `db.json` to break the tests
- Change them back to fix the tests

> **Note:** This doesn't demostrate mocking, which can be useful if you are testing against a live database. I would probably use something like supertest or https://www.npmjs.com/package/jest-express if the need arose.