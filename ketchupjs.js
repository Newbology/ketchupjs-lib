const fetch = require('node-fetch');

let configObj = { key: '' };

function config(key) {
  configObj.key = key;
}

function save(metric, value, user_id) {
  if(!user_id){
    user_id = 0
  }
  const body = {
    key: configObj.key,
    metric: metric,
    value: value.toString(),
    user_id: user_id.toString()
  };

  fetch('https://d3zevizvrk.execute-api.us-west-2.amazonaws.com/dev/queue', {
    method: 'post',
    body: JSON.stringify(body),
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => { 
      console.log(err)
    })
}

module.exports = {
  config,
  save
}


