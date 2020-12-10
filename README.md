# node-challenge
A NodeJS API that integrate with Pipedrive and Bling APIs

Stack used:
* NodeJS
* Express
* MongoDB
* Docker
* Jest

### Initialize
Create a `.env` file in the root of the project and fill all fields:

```
PIPEDRIVE_API_URL=
PIPEDRIVE_PERSONAL_API_TOKEN=

BLING_API_TOKEN=
BLING_API_URL=

MONGO_USERNAME=
MONGO_PASSWORD=
MONGO_PORT=
MONGO_DB=
```

### Running with Docker
Run:
> docker-compose build

Then:
> docker-compose up -d

### Swagger
See the endpoints documentation in [http://localhost:8000/docs/](http://localhost:8000/docs/):

### Third Party Documentation
* [Pipedrive](https://developers.pipedrive.com/docs/api/v1/)
* [Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores)

### Next steps
* Implement routines to synchronize the deals on Pipedrive and Bling to avoid duplicates registers.
* Use message queues to synchronize the deals instead of http request, as the number of deals can be really great in a real scenario.
* Refactor the application to be able to be used for many clients, keeping personal data (URLs, keys, etc) in the database.
