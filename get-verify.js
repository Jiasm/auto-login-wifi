document.querySelector("#inputuin");
pp;

("use strict");

const faker = require("faker");
const Nightmare = require("nightmare");
require("nightmare-upload")(Nightmare);
const fs = require("fs");

let count = 10;

call();

function call() {
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
    .goto("http://exmail.qq.com/login")
    .type("#inputuin", "admin@jiasm.org") // 登录名
    .type("#pp", "Jia696969") // 邮箱
    .click("#btlogin")
    .wait()
    .click('a[data-name="邮件转移"]')
    .wait()
    .end()
    .then(result => {
      console.log(
        result || "Follow success",
        `${firstName}${lastName}@jiasm.org`
      );
    })
    .catch(error => {
      console.error("Failed:", error, `${firstName}${lastName}@jiasm.org`);
    });
}
