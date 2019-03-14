const fetch = require('node-fetch');

let configObj = {};

function config(name, key) {
  configObj.name = name;
  configObj.key = key;
}

function save(metric, value, user_name) {
  if( typeof metric !== "string"){
    throw `Metric needs to be a String, Input receieved was a ${typeof metric}`
  }
  if (!user_name) {
    user_name = 'default';
  };
  if(typeof value !== "number"){
    throw `Value needs to be a Number, Input receieved was a ${typeof value}`;
  }
  if( typeof user_name !== "string"){
    throw `user_name needs to be a String, Input receieved was a ${typeof user_name}`
  }
  
  const body = {
    name: configObj.name,
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name
  };

  fetch('https://6f2sov5oq0.execute-api.us-west-2.amazonaws.com/dev/queue', {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .catch(err => {
      throw err;
    });
}

function most(metric, value, user_name) {
  if( typeof metric !== "string"){
    throw `Metric needs to be a String, Input receieved was a ${typeof metric}`
  }
  if (!user_name) {
    user_name = 'default';
  };
  if(typeof value !== "number"){
    throw `Value needs to be a Number, Input receieved was a ${typeof value}`;
  }
  if( typeof user_name !== "string"){
    throw `user_name needs to be a String, Input receieved was a ${typeof user_name}`
  }
  const body = {
    name: configObj.name,
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name,
    most: true
  };

  fetch('https://6f2sov5oq0.execute-api.us-west-2.amazonaws.com/dev/queue', {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .catch(err => {
      throw err;
    });
}

module.exports = {
  config,
  save,
  most
};
