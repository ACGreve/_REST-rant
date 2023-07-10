# Project REST-Rant

TBD - SUMMARY

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

## Database

**Places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |


## Planning

### User Stories

As a frequent restaurant-goer I want a website that has up to date reviews/feedback from other restaurant-goers so that I can get a good feel for a restaurant before trying it myself.

As a food critique I want a website I can go to to find valid opinions on the quality of a restaurant so that I can gather data from other restaurant-goers.

### Wireframes

TBD

## Notes

Possible bonus ideas:

* Update for comments
* Aggregate rating for a place
* Auto-complete state dropdown