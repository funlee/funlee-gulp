/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-20 23:39:19 
 * @Last Modified time:   2017-12-20 23:39:19 
 * @Description: init page
 */
var data = require('../data/test.json')
var hbs = require('../hbs/init.hbs')

function init() {
  document.querySelector('.init').innerHTML = hbs(data)
}

module.exports = init