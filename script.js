const passwordEle = document.querySelector("div div form div #password");
const userEle = document.querySelector("div div form div #username");
const emailEle = document.querySelector("div div form div #email");
const confirmEle = document.querySelector("div div form div #confirm");
const passerrorEle = document.querySelector("div div form div #password-error");
const passerrorEle2 = document.querySelector(
  "div div form div #password-error-2"
);
const submitBtn = document.querySelector("div div form button");
passwordEle.addEventListener("input", function () {
  passerrorEle.innerHTML = "";
  passerrorEle2.innerHTML = "";
});
confirmEle.addEventListener("input", function () {
  passerrorEle.innerHTML = "";
  passerrorEle2.innerHTML = "";
});
function entered() {
  var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (reg.test(passwordEle.value) == false) {
    passerrorEle2.innerHTML = "Passwords do not created as per rules";
    if (passwordEle.value != confirmEle.value)
      passerrorEle.innerHTML = "Passwords do not match";
  } else {
    submitBtn.style.backgroundColor = "#89E87E";
    submitBtn.innerHTML = "Submitted";
    passwordEle.value = "";
    confirmEle.value = "";
    userEle.value = "";
    emailEle.value = "";
  }
  console.log("checked");

  return false;
}
