#!/usr/bin/env node

'use strict'

const Nightmare = require('nightmare')
const nightmare = Nightmare({
  show: false
})

nightmare
  .goto('http://10.0.16.2/index.htm')
  .wait()
  .evaluate((done) => {
    conn = createXhrObject()
		conn.onreadystatechange = function(){
			if(conn.readyState == 4){
				done(null, '注销成功')
				conn = null
			}
		}
		conn.open("GET","/ajaxlogout?_t="+(new Date().getTime()),true)
		conn.send(null)
  })
  .end()
  .then((result) => {
    console.log(result || '注销成功')
  })
  .catch((error) => {
    console.error('Failed:', error)
  })
