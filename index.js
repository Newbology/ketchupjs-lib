const fetch = require('node-fetch');

let configObj = {};

function config(name, key) {
  configObj.name = name;
  configObj.key = key;
};

function save(metric, value, user_name) {
  const body = {
    name: configObj.name,
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name.toString()
  };

  fetch('https://rdz8bth03m.execute-api.us-west-2.amazonaws.com/dev/queue', {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err);
    });
};

function most(metric, value, user_name) {
  const body = {
    name: configObj.name,
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_name: user_name.toString(),
    most: true
  };

  fetch('https://rdz8bth03m.execute-api.us-west-2.amazonaws.com/dev/queue', {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  config,
  save,
  most
};
