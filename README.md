# Lambda CRUD App

## Install packages
- `npm install`

## Deploy
- `sls deploy`

## Check EndPoints
#### Create
- `curl -X POST <url> --data '{"body" : "post"}'`
#### ReadAll
- `curl <url>`
#### ReadOne
- `curl <url>/{id}`
#### Update
- `curl -X PUT <url>/{id} --data '{"body" : "edit post"}'`
#### Delete
- `curl -X DELETE <url>/{id}`