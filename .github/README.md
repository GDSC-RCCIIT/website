## Database Structure: (Realtime Database)
```
/--
  |chapter-name
  |chapter-email
  |events--
          |id-- #recent gets bigger number
              |date
              |desc
              |link
              |location
              |name
              |pic #url
  |footer--
          |github
          |instagram
          |linkedin
          |twitter
  |prevTeams-- #previous teams
          |year-- #last 2 digits
              |name-- #team member
                  |img #url
                  |linkedin
                  |position
  |other_members--
          |name--
              |Github
              |instagram
              |Linkedin
              |Web
              |img
              |position
              |Facebook
  |team--
          |name--
              |Github
              |instagram
              |Linkedin
              |Web
              |img
              |position
              |Facebook
              |top #default: false (`true` for lead and campus faculty facilitator)
  |home-page--
          |connect
          |grow
          |intro
          |join
          |faq
              |data--
                  |question: answer #key-value
              |title
              |description
          |technologies--
              |data--
                  |name: img #key-value
              |title
              |description
```

## Database Structure: (Firestore)
```
Speakers -> {speakers} -> /
                          -->name
                          -->bio
                          -->image #url
                          -->socialLinks
                             -->facebook
                             -->github
                             -->web
                             -->twitter
                             -->linkedin
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_DB_URL`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET`

`REACT_APP_MESSAGING_SENDER_ID`

`REACT_APP_APP_ID`

`REACT_APP_MEASUREMENT_ID`

## Deployment

To start this project run

```bash
  npm run start
```

To build this project run

```bash
  npm run build
```


## Authors

- [@danger-ahead](https://www.github.com/danger-ahead)

## [Discord Server](https://discord.gg/6UGvTbb3qF)
