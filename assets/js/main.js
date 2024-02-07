let users = [
  {
    id: 1,
    Name: "Reza",
    password: "12r",
    email: "reza@gmail.com",
    birthday: "2004-7-10",
    codeMeli: "3861483041",
  },
  {
    id: 2,
    Name: "ali",
    password: "12a",
    email: "ali@gmail.com",
    birthay: "2004-7-10",
    codeMeli: "3861483041",
  },
];

let loginBtn = document.querySelector(".loginBtn");
let submitBtn = document.querySelector(".submitBtn");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".email");
let userPass = document.querySelector(".pass");
let userBirthday = document.querySelector(".birthday");
let userCodeMeli = document.querySelector(".codeMeli");
let loginUserEmail = document.querySelector(".loginEmail");
let loginUserPass = document.querySelector(".loginPass");

const formContainer = userName.parentNode;
const loginFormContainer = loginUserEmail.parentNode;

$(document).ready(function () {
  $("#signUp").click(function () {
    $("#container").addClass("right-panel-active");
  });
  $("#signIn").click(function () {
    $("#container").removeClass("right-panel-active");
  });
});
const haveAtLeastOneNumber = /\d/;
const ThreeCharsRegex = /^.{3,15}$/;
const tenCharRegex = /^.{10,10}$/;
const haveAtLeastOneAlphabet = /[a-z]/;
const notEmptyInput = /^[^]+$/;

const passRegex = new RegExp(
  `^(?=.*${haveAtLeastOneNumber.source})(?=.*${ThreeCharsRegex.source})(?=.*${haveAtLeastOneAlphabet.source})`
);

submitBtn.addEventListener("click", function () {
  function calculateAge(dateString) {
    var date = new Date(dateString);
    var today = new Date();
    var year = today.getFullYear() - date.getFullYear();
    var month = today.getMonth() - date.getMonth();
    var day = today.getDate() - date.getDate();
    console.log(dateString);
    if (month < 0 || (month === 0 && day < 0)) {
      year--;
    }
    return year;
  }
  var age = calculateAge(userBirthday.value);

  const userNameRegex = ThreeCharsRegex.test(userName.value);
  const userPassRegex = passRegex.test(userPass.value);
  const userEmailRegex = notEmptyInput.test(userEmail.value);
  const userCodeMeliRegex = tenCharRegex.test(userCodeMeli.value);
  const userBirthdayRegex = notEmptyInput.test(userBirthday.value);
  let errorDiv;

  if (!userNameRegex) {
    if (!document.querySelector(".userNameError")) {
      errorDiv = document.createElement("div");
      errorDiv.setAttribute("class", "incorrecterror userNameError");
      errorDiv.innerHTML = "نام کاربری باید حداقل 3 و حداکثر 15 کاراکتر باشد";
      formContainer.insertBefore(errorDiv, userName.nextSibling);
    }
  } else {
    errorDiv = document.querySelector(".userNameError");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  if (!userEmailRegex) {
    if (!document.querySelector(".userEmailError")) {
      errorDiv = document.createElement("div");
      errorDiv.setAttribute("class", "incorrecterror userEmailError");
      errorDiv.innerHTML = "ایمیل اجباری است و نمیتوان آن را خالی گذاشت";
      formContainer.insertBefore(errorDiv, userEmail.nextSibling);
    }
  } else {
    errorDiv = document.querySelector(".userEmailError");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  if (!userPassRegex) {
    if (!document.querySelector(".userPassError")) {
      errorDiv = document.createElement("div");
      errorDiv.setAttribute("class", "incorrecterror userPassError");
      errorDiv.innerHTML = "کلمه عبور باید ترکیبی از حروف و عدد باشد";
      formContainer.insertBefore(errorDiv, userPass.nextSibling);
    }
  } else {
    errorDiv = document.querySelector(".userPassError");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  if (age < 18 || age > 80 || !userBirthdayRegex) {
    if (!document.querySelector(".userBirthDayError")) {
      errorDiv = document.createElement("div");
      errorDiv.setAttribute("class", "incorrecterror userBirthDayError");
      errorDiv.innerHTML = "سن شما باید بیشتر از 18 و حداکثر 80 باشد";
      formContainer.insertBefore(errorDiv, userBirthday.nextSibling);
    }
  } else {
    errorDiv = document.querySelector(".userBirthDayError");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  if (!userCodeMeliRegex) {
    if (!document.querySelector(".userCodeMeliError")) {
      errorDiv = document.createElement("div");
      errorDiv.setAttribute("class", "incorrecterror userCodeMeliError");
      errorDiv.innerHTML = "کد ملی باید دقیقا 10 کاراکتر باشد";
      formContainer.insertBefore(errorDiv, userCodeMeli.nextSibling);
    }
  } else {
    errorDiv = document.querySelector(".userCodeMeliError");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  if (
    userNameRegex &&
    userPassRegex &&
    userEmailRegex &&
    userCodeMeliRegex &&
    userBirthdayRegex &&
    age > 18 &&
    age < 80
  ) {
    var alertBox = document.getElementById("alert-box");
    alertBox.classList.add("show");
    alertBox.innerHTML = "ثبت نام شما با موفقیت انجام شد";
    setTimeout(function () {
      alertBox.classList.remove("show");
    }, 2000);
  }
});
loginBtn.addEventListener("click", function () {
  let foundUser = false;
  users.forEach(function (user) {
    if (
      user.email === loginUserEmail.value &&
      user.password === loginUserPass.value
    ) {
      if (document.querySelector(".loginUserPass")) {
        logineErrorDiv.remove();
      }
      foundUser = true;
      var alertBox = document.getElementById("alert-box");
      alertBox.classList.add("show");
      alertBox.innerHTML = "salam " + user.Name + " khosh amadid";
      setTimeout(function () {
        alertBox.classList.remove("show");
      }, 2000);
    }
  });
  if (!foundUser) {
    if (!document.querySelector(".loginUserPass")) {
      logineErrorDiv = document.createElement("div");
      logineErrorDiv.setAttribute("class", "incorrecterror loginUserPass");
      logineErrorDiv.innerHTML = "ایمیل یا کلمه عبور اشتباه است";
      loginFormContainer.insertBefore(
        logineErrorDiv,
        loginUserPass.nextSibling
      );
    }
  }
});
