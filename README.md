# safeFirst

Intro

# Team

Cameron - Product Owner</br>
Robert<br>
Richard<br>


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

### Users
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | user_name | String | Name of user logging in |
  | email_address | String | Email address of registered user |
  | contact details | string | Contact details of registered user |
  | hash | string | The hashed password of the registered user |
  | company_id | integer | Secondary key to create a link to the Company table |
  | industry_id | integer | Secondary key to create a link go the Industry table |

### Company
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each company |
  | company | String | Name of company |

### Industry
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each industry |
  | industry | String | Unique identifier for each industry |
  
### Incidents
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | user_id | integer | user_id of the person who is currently logged in |
  | incident type | String | The type of incident |
  | datetime | integer | The date and time the incident took place in epoch format |
  | task| string | The task performed when the incident occured (dropdown) |
  | othertask| string | The task performed when the incident occured (free text field) |
  | incident| string | Description of the incident (dropdown) |
  | otherincident| string | Description of the incident (free text field) |
  | location | string | Location of where the incident happened (free text field) |
  | firstaid | boolean | Has first aid been administered true of false |
  
### Hazards
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | user_id | integer | user_id of the person who is currently logged in |
  | hazard | String | Description of the hazard |
  | risk | integer | Risk rating on a scale from 1 to 5 (where 5 is highest) |
  | control| string | Description of what has been done to mitigate the risk |
  | daily | boolean | is this risk to appear on the dashboard for the risks of the day, true or false
  |  



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





