## Few words

App is organized in very extensible and simple way, counting on the fact to be extended.


Routes are implemented with react-router, and redux with redux-thunk is used for
managing state and api calls, for design I used bootstrap.

## /data

Some of the data needed for application to work, as very simple I decide to keep
it out of db:

- US states in JSON format for form in select
- Timezons international


## How to extend

I organized redux part in 'logistical units', so every major feature has its own
action as well reducer, types are constants in action/types.js file.

Hook it up in rootReducer.js and thats it(mostly).



