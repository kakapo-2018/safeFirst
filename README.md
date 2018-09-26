# safeFirst

Intro

# Team

Cameron - Product Owner
Robert
Richard


# Timeline

Dates
Sprints

# API Documentation

Method : GET 
Route : / API/LOST

(body)- - an array of objects
```sh
[
    {
        "id": 1,
        "name": "Rodger",
        "species": "Cat",
        "photo": "https://picsum.photos/200/300",
        "user_id": 1
    },
    {
        "id": 2,
        "name": "Topsy",
        "species": "Dog",
        "photo": "https://picsum.photos/100/200",
        "user_id": 2
    },
    {
        "id": 3,
        "name": "Raster",
        "species": "Hedgehog",
        "photo": "https://picsum.photos/60/30",
        "user_id": 3
    }
]
```



# User Stories

MVP
Stretch


# Views (client side)



# Reducers (client side)



# Actions (client side)



# API (client - server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/lost | No | Get the list of lost pets | Array of Objects (object = A Lost Pet) |
| Get | /api/found | No | Get the list of found pets | Array of Objects (object = A Found Pet) |
| Post | /api/lost | Yes | Add a Lost pet to the db | The Pet that was added (as an object) |
| Post | /api/lost | Yes | Add a Found pet to the db | The Pet that was added (as an object) |


# DB (server)

### Lost
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each lost animal |
  | name | String | Name of Lost animal, because names are special <3 |
  | species | String | What kind of animal is it? |
  | photo | string | URL of a picture of the lost animal |
  | user_id | integer | Id of the user who reported the animal as lost |


# Setup

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```





