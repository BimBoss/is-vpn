const axios = require('axios').default;


exports.isVpn = async function(ip) {
  if (!ip) {
    throw new Error('IP is required');
  }

  let { data } = await axios.get(`https://discoteka.herokuapp.com/api/is-vpn?ip=${ip}`);
  return data;
}

