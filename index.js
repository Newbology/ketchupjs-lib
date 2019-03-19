const fetch = require('node-fetch');
const lambda =
  'https://qzhilsv8a2.execute-api.us-west-2.amazonaws.com/default/SQS-dev-queue';
let configObj = {};

function config(key) {
  configObj.key = key;
}

function save(metric, value, user_name, privacy) {
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
  if (privacy && typeof privacy !== boolean) {
    throw `privacy needs to be a boolean, Input receieved was a ${typeof privacy}`;
  }

  const body = {
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name,
    privacy: privacy
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
      console.log(err.message)
    });
}

function most(metric, value, user_name, privacy) {
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
  if (privacy && typeof privacy !== boolean) {
    throw `privacy needs to be a boolean, Input receieved was a ${typeof privacy}`;
  }
  const body = {
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name,
    privacy: privacy,
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
      console.log(err.message);
    });
}

module.exports = {
  config,
  save,
  most
};
