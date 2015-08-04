# node-zhiyan
智验短信验证

####npm install node-zhiyan


var zy = require('node-zhiyan');

zy.setConfig = {

   appKey: 'xxxx',
  
   token: 'xxxx',
 
   templateId: 'xxxx'

 };
 
zy.sendSms(mobile, code, callback);
