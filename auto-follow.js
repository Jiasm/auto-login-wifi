"use strict";

const faker = require("faker");
const Nightmare = require("nightmare");
const fs = require("fs");

let count = 10;

call(count);

function call(count) {
  if (count-- <= 0) return;
  let fakerName = faker.name;
  let firstName = fakerName.firstName();
  let lastName = fakerName.lastName();
  let nightmare = Nightmare({
    // openDevTools: {
    //   mode: 'detach'
    // },
    show: false
  });
  nightmare
    .goto("https://github.com")
    // .click(".logout-form .dropdown-signout")
    // .wait()
    .type('input[name="user[login]"]', `${firstName}-${lastName}`) // 登录名
    .type('input[name="user[email]"]', `${firstName}${lastName}@somedomain.org`) // 邮箱
    .type('input[name="user[password]"]', "123") // 密码
    .click('.home-hero-signup .btn[type="submit"]')
    .wait(".js-choose-plan-submit")
    .click(".js-choose-plan-submit")
    .wait(".alternate-action")
    .click(".alternate-action")
    .wait()
    .goto("https://github.com/XXX")
    .click(".js-sticky.js-user-profile-follow-button.js-toggler-target")
    .end()
    .then(result => {
      console.log(
        result || "Follow success",
        `${firstName}${lastName}@jiasm.org`
      );
      fs.appendFile("account.log", `${firstName}${lastName}@jiasm.org` + "\n");
      call(count);
    })
    .catch(error => {
      console.error("Failed:", error, `${firstName}${lastName}@jiasm.org`);
      call(count);
    });
}
