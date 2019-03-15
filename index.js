const fetch = require('node-fetch');
//in development put your api gateway here
const lambda = '';
let configObj = {};

function config(key) {
  configObj.key = key;
}

function save(metric, value, user_name) {
  if (typeof metric !== 'string') {
    throw `Metric needs to be a String, Input receieved was a ${typeof metric}`;
  }
  if (!user_name) {
    user_name = 'default';
  }
  if (typeof value !== 'number') {
    throw `Value needs to be a Number, Input receieved was a ${typeof value}`;
  }
  if (typeof user_name !== 'string') {
    throw `user_name needs to be a String, Input receieved was a ${typeof user_name}`;
  }

  const body = {
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name
  };

  fetch(lambda, {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.status !== 200) {
        throw response.statusText;
      }
    })
    .catch(err => {
      throw err;
    });
}

function most(metric, value, user_name) {
  if (typeof metric !== 'string') {
    throw `Metric needs to be a String, Input receieved was a ${typeof metric}`;
  }
  if (!user_name) {
    user_name = 'default';
  }
  if (typeof value !== 'number') {
    throw `Value needs to be a Number, Input receieved was a ${typeof value}`;
  }
  if (typeof user_name !== 'string') {
    throw `user_name needs to be a String, Input receieved was a ${typeof user_name}`;
  }
  const body = {
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name,
    most: true
  };
  fetch(lambda, {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.status !== 200) {
        throw response.statusText;
      }
    })
    .catch(err => {
      throw err;
    });
}

module.exports = {
  config,
  save,
  most
};
