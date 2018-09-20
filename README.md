# Lost and Found
## Team

Back end team
* Marie (architecture)
* Winston
* Zane
* Rob

Front end team
*  Kyoko (architecture)
*  Nat
*  Cam
*  Richard (timekeeper)
*  Welli

Timekeeper
* Richard

Architecture
* Marie
* Kyoko
* Matt

Gitmasters (send pull requests to these people for approval)
* Ross 
* Engie
* Kelly

## Timeline

#Thursday
* 10.10am - 11.30am - Planning sprint 1
* 11.30am - 12.00pm - Standup / retro / planning 
* 12.00pm -2.00pm lunch
* 2.00pm - 4.30pm Sprint 2
* 4.30pm - 5.00pm - Standup / retro / planning 
* 5.00pm onwards - continued work on isolated branches 

#Friday
* 9.00am - 9.15am - Standup 
* 9.15am -11.45am - Sprint 3
* 11.45am - 12.00pm - Standup / retro / planning 
* 12.00pm -4.00pm - Sprint 4 take lunch when you need :)
* 4.00pm - presentation 
* 5.00pm celebration

 ---

## Front end tasks
  | 1 | a |
  | 2 | a |
  
## Back end tasks
* 1 DB Table lost 
* 2 DB Table found  done!
* 3 Make seed lost
* 4 Make seed found done !
* 5 Server API Lost create row in lost db (need to be logged in) 
* 6 Server API Post found create row in found db
* 7 Server API Post register create row in users db 
* 8 Server API Post login (match in db users) 
* 9 Deploy 1 
* 10 Deploy 2

 ---
## API DOCUMENTATION
Method : GET 
Route : / API/LOST

(body)- - an array of objects
```sh
TO COME
```

Method : POST 
Route : / API/LOST

(body)- an object
```sh
TO COME
```

Method : GET 
Route : / API/FOUND

(body) - an array of objects
```sh
[
    {
        "id": 1,
        "species": "dog",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6_vciktketOzivsqfDiULHwFo87ptR5JJtA8pbDBZDkcbnU",
        "user_id": 1   
    },
    {
        "id": 2,
        "species": "cat",
        "photo": "https://yt3.ggpht.com/a-/AN66SAwnPp08tm2g7r7b6OcFvB9KQLvSFIJYUwgyKw=s900-mo-c-c0xffffffff-rj-k-no",
        "user_id": 2
    },
    {
        "id": 3,
        "species": "dog",
        "photo": "https://static01.nyt.com/images/2018/06/26/business/25ugileistdog-sub/merlin_140144286_193276f3-89e9-44a8-a828-51ec9ff5bc8e-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "user_id": 2
    },
]
```

Method : POST 
Route : / API/FOUND

(body) - an object
```sh
{"species":"big dog",
"photo":"987.html",
////// the user_id does not fill the DB need to do it as an action client side //////////
"user_id":
}
```

Method : POST 
Route : / API/AUTH/REGISTER

(body) - an object
```sh
{"user_name":"bob",
"contact_details":"123 valley alley",
"email_address":"abc@gmail.com",
"hash":"bob"
} 
```

Method : POST 
Route : / API/AUTH/LOGIN

(body) - an object
```sh
{
"user_name":"bob",
"hash":"bob"
} 
```

 ---

 ---

The focus of this app is to practice using the Full Stack we teach, (with auth) in a large scale app.

The idea of the app is to create a "billboard" style site for people to post about their animals that have gone missing, and for people who have found stray animals to post about them.

The hope is that within a small community this could be a great go to for making sure those run-away floofs make it home safely.


## The Tech

A Boilerplate is already set up for you (Thanks Harrison!) with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/)
* [JWT Auth (Local)](https://jwt.io/)

The Migration and seeds for the users table, and all login functionality is already set up!

The mobile responsiveness is also being handled by some neat JS and Bulma classes, be sure to incorporate that view in your project goals!


## User Stories

### MVP

As a non-registered user:
  * I want to register for the App under my name
  * I want to browse all of the "Found" animals on the site.
  * I want to to view a list of "Lost" animals posted to the site.
  * I want to sort the "Lost" or Found" animals by species. (such as Cat / Dog)

As a registered user:
  * I want to see the contact information for the user that has found an animal that is mine.
  * I want to be able to inform a user that their "Found" animal is mine through the app, and provide them with contact information of my own.
  * I want to be able to post about a Lost animal that I have "Found"
  * I want to be able to post about an animal of my own that has been "Lost"

### Stretch

As an unregistered user:
  * I want to be able to see a list of all the Animals that have been "Found" after being posted as lost within the site, to give me hope <3

As a registered user:
  * I want to be able to remove a lost animal that I have posted, as it has been "Found" / Mark it as found.
  * I want to be able to edit a post I have made about a Lost animal of mine
  * I want to be able to edit a post I have made about a Found animal of mine

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | FoundPets | View the pets that users have found |
  | LostPets | View the pets that users have reported as lost |
  | LostForm | For a User to add a pet that they have lost |
  | FoundForm | For a user to add a pet that they have found |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | foundPets | Store the array of pets that have been found (from db) |
  | lostPets | Store the array of pets that have been lost (from db) |


## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |
  | RECEIVE_FOUND_PETS | pets | For retreving the found pets from the server response |
  | ADD_FOUND_PET | pet | For adding a found pet to the client store after is had been added to the db |
  | RECEIVE_LOST_PETS | pets | For retreving the lost pets from the server response |
  | ADD_LOST_PET | pet | For adding lost a pet to the client store after is had been added to the db |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/lost | No | Get the list of lost pets | Array of Objects (object = A Lost Pet) |
| Get | /api/found | No | Get the list of found pets | Array of Objects (object = A Found Pet) |
| Post | /api/lost | Yes | Add a Lost pet to the db | The Pet that was added (as an object) |
| Post | /api/lost | Yes | Add a Found pet to the db | The Pet that was added (as an object) |

## DB (Server Side) -
  There should be three tables for MVP. You may want/need to add additional columns or tables.

### Lost
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each lost animal |
  | name | String | Name of Lost animal, because names are special <3 |
  | species | String | What kind of animal is it? |
  | photo | string | URL of a picture of the lost animal |
  | user_id | integer | Id of the user who reported the animal as lost |


### Found
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each found animal |
  | species | String | What kind of animal is it? |
  | photo | string | URL of a picture of the found animal |
  | user_id | integer | Id of the user who found the lost animal |

### Users (Join Table M2M)

  Many Users to Many Pets

 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each user |
 | user_name | string | Used for login |
 | contact_details | string | displayed for contact information |
 | email_address | string | displayed for contact information |
 | hash | text | hashed login password |
 ---


## Setup

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


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
