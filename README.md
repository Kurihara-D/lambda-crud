# Lambda CRUD App

## install packages
- `npm install`

## deploy
- `sls deploy`

## check endpoints
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