# auth

> **WIP**

- make a Postgres db
- Add a `.env` with that db's config. Mine looks like:
```
DB_USER=hopscotch
DB_HOST=localhost
DB_NAME=auth
DB_PASSWORD=
DB_PORT=5432
ACCESS_SECRET=asdjfaisdfj
```
- `yarn`
- 2 terminal tabs:
  - `$ yarn dev` in project root to launch Express server
  - `$ cd some-react-app; yarn start` in other to launch React app

Click login button. Access token valid for 10 seconds so click secret button soon to load a secret Pokemon.