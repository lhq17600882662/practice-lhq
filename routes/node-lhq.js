var express = require('express');
var router = express.Router();
router.get('/list',function(request,response){//1请求参数  2响应参数
	console.log('into list.....running where?')
	response.send('lhq')
})




//输出
module.exports = router;
