const {isVpn} = require('./index');

isVpn('8.39.206.9').then(data => {

  if (data.isVpn !== true) {
    throw new Error('Test Failed');
  }  

  console.log('Test Passed');
});