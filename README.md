# resOS API

This is the backend for the resOS technical assessment

# dev

1. Clone the .env.example file to .env
2. Set the environment variables

```
PORT=PORT

PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

NODE_ENV=development
```

3. Run the command `docker compose up -d`
4. Populate the database running the command `npm run seed`
5. Execute the command `npm run dev` to run the project on dev mode
