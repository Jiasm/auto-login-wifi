// CaleighHagenes@jiasm.org
// MohammadQuigley@jiasm.org
// ZionBeatty@jiasm.org
// DewittDuBuque@jiasm.org

// MoseStoltenberg@jiasm.org

// LouisaKris@jiasm.org

// TyshawnTorphy@jiasm.org

// AbigaleSchneider@jiasm.org

// CeciliaMueller@jiasm.org

// DaphneRoberts@jiasm.org

// Please delete this account,
// This's just a additional account for @jiasm
// I have realized my mistake and I want to remedy it.

(() => {
  let reg = /^(0(\.(0[^\D0])|([^\D0]\d)))|(((\d)|(0\d{0, 4}[^\D0])|([^\D0]\d{0, 5}))(\.((\d)|(0\d{0, }[^\D0])|([^\D0]\d{0, })))?)$/

  let count = 0.01

  while (count <= 100000) {
    if (!reg.test(String(count))) {
      console.log('Error: ', String(count))
    }
    count += 0.01
  }

  console.log('done')
})()
