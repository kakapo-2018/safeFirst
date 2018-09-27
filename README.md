## safeFirst

Intro

## Team

Cameron - Product Owner</br>
Robert<br>
Richard<br>

## Timeline

| Sprint | Days | Summary | Client Side | Server Side| Git Master | Agile Navigator|
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Wednesday/ Thursday | Planning | Boilerplate, create Components | Create DB Migrations and Seeds|
| 1 | Friday/ Saturday | Build structure | Build Components | Build Routes | Robert | Cameron |
| 2 | Sunday/ Monday | Finish MVP | Finalise build of Components | Make adjustments where needed| Richard | Robert |
| 3 | Tuesday/ Wednesday | Testing, CSS, Stretch | Testing React/Redux, Apply CSS and Design, Finishing touches, Stretches | Deploy, Testing | Cameron | Richard |
| 4 | Thursday | Prepare presentation | | |




## User Stories

MVP </br>
Stretch


## Views (client side)



## Reducers (client side)



## Actions (client side)



## API (client - server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/dashboard | Yes | List of hazards relevant for the current day (daily set to true)| Array of Objects (object = Hazard) |
| Get | /api/dashboard | Yes | Statistics TBD | TBD |
| Get | /api/hsmeeting | Yes | List of hazards where 'daily' is set to 'false' | Array of Objects (object = hazard) |
| Post | /api/hsmeeting/hazard | Yes | Add a new hazard | The hazard that was added (as an object) |
| Post | /api/hsmeeting/minute | Yes | Add a new meeting minute | The minute that was added (as an object) |
| Post | /api/dailymeeting | Yes | Add a new hazard | The hazard that was added (as an object) |
| Post | /api/incident | Yes | Add new incident | The incident that was added (as an object) |
| Get | /api/incident | Yes | List of all incidents raised | Array of Objects (object = incident) |

## API Documentation

Method : POST 
Route : / API/AUTH/REGISTER

(body) - an object / if correct new user :
```sh
{"user_name":"OTHERbob",
"contact_details":"123 valley alley",
"email_address":"abc@gmail.com",
"password":"bob"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2JCT0IiLCJpYXQiOjE1Mzc0ODM4MDMsImV4cCI6MTUzNzU3MDIwM30.UfxJJQ8b0ppekGycWMu6FydSb3RaW0i8couDx3bOwjc"}
```

(body) - an object /if user name exists :
```sh
{"user_name":"bob",
"contact_details":"123 valley alley",
"email_address":"abc@gmail.com",
"hash":"bob"
} 
```
Will return
```sh
{"message":"User Name Taken"}
```

/!\ only mandatory to habe a name a password as a string
```sh
{
"user_name":"OTTERbob",
"password":""
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJPVFRFUmJvYiIsImlhdCI6MTUzNzQ4NTEwOCwiZXhwIjoxNTM3NTcxNTA4fQ.g8J41Y5dZHMVSOY-_aJHRZUbVJfYOglUVRVjneFshxs"}
```


Method : POST 
Route : / API/AUTH/LOGIN 

(body) - an object / if correct combinaison :
```sh
{"user_name":"bob",
"password":"krunk"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2IiLCJpYXQiOjE1Mzc0ODQ4MTUsImV4cCI6MTUzNzU3MTIxNX0.wNY3GveyZIeBKwDVpJ3ulkYE_KQv-T4cnuQz4bAsCWw"}
```

(body) - an object / if incorrect password :
```sh
{"user_name":"bob",
"password":"bob"
} 
```
Will return
```sh
{"message":"Password is incorrect"}
```
(body) - an object / if incorrect name :
```sh
{"user_name":"maurice123",
"password":"krunk"
} 
```
Will return
```sh
{"message":"User does not exist"}
```
 ---

Method : GET 
Route : / API/DASHBOARD

(body)- - an array of objects
```sh
[
    {
        "id": 1,
        "hazard": "Lose items on ground",
        "risk": "Slipping or falling",
        "control": "Everyone is responsible to keep the floor tidy with no lose items floating aorund",
        "daily": "true"
    },
    {
        "id": 2,
        "hazard": "Working on ladders",
        "risk": "Falling of the ladder",
        "control": "Work in pairs with one person on the ground responsible for ladder safety",
        "daily": "true"
    },
]
```
Method : GET 
Route : / API/DASHBOARD

(body)- - an array of objects
```sh
[
    {
      TBD
    },
    {
      TBD
    },
]
```


Method : GET 
Route : / API/HSMEETING

(body)- - an array of objects
```sh
[
    {
        "id": 1,
        "hazard": "Sunburn",
        "risk": "We are working through summer, there is a risk of sunburn",
        "control": "Wear SPF50, hat, sunglasses and long sleeve clothing if needed",
        "daily": "false"
    },
    {
        "id": 2,
        "hazard": "Working near road",
        "risk": "Being run over by a vehicle",
        "control": "Setting up a traffic management plan and reminding everyone on a daily basis to act responsibly around traffic",
        "daily": "false"
    },
]
```
Method : POST 
Route : / API/HSMEETING

(body) - an object:
```sh
{"datetime":"2018-09-26 15:30",
"location":"22 Cuba Street, Wellington",
"issues": "The following issues were discussed: health and safety plan, incidents from the last month. This led to the following conclussions and actions points......"
} 
```
Method : POST 
Route : / API/HSMEETING

(body) - an object:
```sh
{"id": 1,
"hazard": "Sunburn",
"risk": "We are working through summer, there is a risk of sunburn",
"control": "Wear SPF50, hat, sunglasses and long sleeve clothing if needed",
"daily": "false"
} 
```

Method : POST 
Route : / API/DAILYMEETING

(body) - an object:
```sh
{"id": 1,
"hazard": "Sunburn",
"risk": "We are working through summer, there is a risk of sunburn",
"control": "Wear SPF50, hat, sunglasses and long sleeve clothing if needed",
"daily": "false"
} 
```
Method : POST 
Route : / API/INCIDENT

(body) - an object:
```sh
{"id": 1,
"user_id": "Sunburn",
"incident_type": "Near Miss",
"datetime": "2018-09-26 15:30",
"task": "Other",
"othertask": "Cutting a piece of wire",
"incident": "Knife slipped and went through glove, but didn't cut finger",
"otherincident": "",
"location": "22 Cuba Street, Wellington",
"firstaid": "false",
} 
```
Method : GET 
Route : / API/INCIDENT

(body)- - an array of objects
```sh
[
	{
	"id": 1,
	"user_id": "2",
	"incident_type": "Near Miss",
	"datetime": "2018-09-26 15:30",
	"task": "Other",
	"othertask": "Cutting a piece of wire",
	"incident": "Knife slipped and went through glove, but didn't cut finger",
	"otherincident": "",
	"location": "22 Cuba Street, Wellington",
	"firstaid": "false",
	}, 
	{
	"id": 1,
	"user_id": "5",
	"incident_type": "Near Miss",
	"datetime": "2018-09-26 15:30",
	"task": "Other",
	"othertask": "Cutting a piece of wire",
	"incident": "Knife slipped and went through glove, but didn't cut finger",
	"otherincident": "",
	"location": "22 Cuba Street, Wellington",
	"firstaid": "false",
	}, 
]
```
## DB (server)

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

### Companies
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each company |
  | company | String | Name of company |

### Industries
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each industry |
  | industry | String | Unique identifier for each industry |
  
### Incidents
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | user_id | integer | user_id of the person who is currently logged in |
  | person_involved | string | the user who is involved in the incident, lookup to user table |
  | incident_type | String | The type of incident, defined list: 'Near miss', 'Accident', 'Injury' |
  | date_time | string | The date and time the incident took place (YYYY-MM-DD HH:MM) |
  | task| string | The task performed when the incident occured (dropdown) |
  | other_task| string | The task performed when the incident occured (free text field) |
  | incident| string | Description of the incident (dropdown) |
  | other_incident| string | Description of the incident (free text field) |
  | location | string | Location of where the incident happened (free text field) |
  | first_aid | string | Has first aid been administered 'true' or 'false' |
  
### Hazards
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | hazard | String | Description of the hazard |
  | risk | integer | Risk rating on a scale from 1 to 5 (where 5 is highest) |
  | control | string | Description of what has been done to mitigate the risk |
  | daily | string | Is this risk to appear on the dashboard for the risks of the day, 'true' or 'false'
  
### Meetings
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | date_time | string | The date and time the incident took place (YYYY-MM-DD HH:MM) |  
  | location | string | Location of where the meeting was held | 
  | issues | string | Text report of issues identified | 
  
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





