Check if IP belongs to any VPN service
IP's database continiusly grow

```
const { isVpn } = require('is-vpn'');

const result = await isVpn('8.39.206.9'); // { isVpn: true }
```
