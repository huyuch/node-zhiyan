/**
*  zy.setConfig = {
*    appKey: 'xxxx',
*    token: 'xxxx',
*    templateId: 'xxxx'
*  }
*  zy.sendSms(mobile, code, callback)
*/
var request = require('request');
var crypto =  require('crypto');

var zy = {
	config: {},
	set setConfig(config) {
		this.config = config;
	},
	sendSms: function(mobile, code, callback) {
		var timestamp = Math.round(new Date().getTime()/1000);
		var sign = crypto.createHash('md5').update(this.config.appKey + this.config.token + this.config.templateId + mobile + code + timestamp, 'utf8').digest("hex");
    	var url = 'https://sms.zhiyan.net/sms/sms/single/' + this.config.appKey + '/' + this.config.token + '/' + this.config.templateId + '?timestamp=' + timestamp + '&sign=' + sign;
    	var data = JSON.stringify({
            mobile: mobile,
            param: code,
            extend: ''
        });
	    var opt = {
	        rejectUnauthorized: false,
	        url: url,
	        method: 'POST',
	        form: {
	            data: data
	        }
	    };
	    request(opt, callback);
	}
};
module.exports = zy;
