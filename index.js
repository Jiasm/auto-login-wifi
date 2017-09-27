#!/usr/bin/env node

'use strict';

const Nightmare = require('nightmare')
const nightmare = Nightmare({
  // openDevTools: {
  //   mode: 'detach'
  // },
  show: false
})

if (!process.env.LOGIN_WIFI_USERNAME || !process.env.LOGIN_WIFI_PASSWORD) {
  return console.error(`请设置[LOGIN_WIFI_USERNAME]和[LOGIN_WIFI_PASSWORD]`)
}

nightmare
  .goto('http://10.10.10.1/ac_portal/default/pc.html?tabs=pwd')
  .type('#password_name', process.env.LOGIN_WIFI_USERNAME)
  .type('#password_pwd', process.env.LOGIN_WIFI_PASSWORD)
  .click('#password_submitBtn')
  .wait()
  .evaluate((done) => {
    let tag = document.querySelector('.login_body .login_box_msg.shiftKey')
    tag.addEventListener('DOMSubtreeModified', function () {
      if (tag) {
        done(tag.innerText.replace(/[\r\n\s]/g, ''))
      } else {
        done(null, '登录成功')
      }
    }, false)

    window.httpscert_jump_logout = function () {
      done(null, '登录成功')
    }
  })
  .end()
  .then((result) => {
    console.log(result || '登录成功')
  })
  .catch((error) => {
    console.error('Failed:', error)
  });
