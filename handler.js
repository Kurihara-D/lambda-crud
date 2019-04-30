'use strict';
const todosCreate = require('./lib/create')
const todosReadAll = require('./lib/read-all')
const todosReadOne = require('./lib/read-one')
const todosUpdate = require('./lib/update')
const todosDelete = require('./lib/delete')

module.exports.create = (event, context, callback) => {
  todosCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response)
  })
}

module.exports.readAll = (event, context, callback) => {
  todosReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response)
  })
}

module.exports.readOne = (event, context, callback) => {
  todosReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
  context.succeed(response)
  })
}

module.exports.update = (event, context, callback) => {
  todosUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response)
  })
}

module.exports.delete = (event, callback) => {
  todosDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response)
  })
}