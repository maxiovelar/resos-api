# resOS API

This is the Back-End project for the resOS app.

## Running the App on dev mode following the next steps:

1. Clone the .env.example file to .env
2. Set the environment variables

```
PORT=
PUBLIC_PATH=public

PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

NODE_ENV=development
```

3. Run the command `docker compose up -d` to init the MongoDB service.
4. Populate the database running the command `npm run seed`
5. Execute the command `npm run dev` to run the project on dev mode

## Project Overview

This project is built with Node + ExpressJS + TypeScript. The data is stored in a MongoDB database.

## Endpoints

`/api/restaurants` - Returns the entire list of restaurants.

`/api/restaurants/search?text=` - Returns a list of restaurants matching your query.

### Scalability

Thanks to the clean architecture and Domain-Driven Design, the application is designed to be scalable, allowing for future expansion and seamless integration of additional functions.

### Potential for Improvement

- **Pagination**: Add pagination to the API response for the restaurants list. This will help to better manage and organize data in the front-end.

- **Unit Tests**: Apply unit tests to ensure robustness and reliability, potentially including integration tests and snapshot testing for components.

For more details, refer to the individual files in the codebase.
