const faker = require("faker");
const fs = require("fs");

buildAvatar();

function buildAvatar() {
  let count = 200;
  while (count--) {
    try {
      require("child_process").execSync(
        `curl -o dist/a-random-icon-${count}.jpg ${faker.internet.avatar()}`
      );
    } catch (e) {
      console.error(e);
    }
  }
}
