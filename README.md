# node-zhiyan
智验短信验证
##Installation
 ```
 $ npm install node-zhiyan
 ```
##Getting Started
```javascript
var zy = require('node-zhiyan');
zy.setConfig = {
   appKey: 'xxxx',
   token: 'xxxx',
   templateId: 'xxxx'
 };
 
zy.sendSms(mobile, code, callback);
```
