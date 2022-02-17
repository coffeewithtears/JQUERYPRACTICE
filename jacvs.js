$(function () {
  var nMaxLength = 150;
  $('.remaining').text(nMaxLength);
  $("#description").keydown(function (event) {
    LimitCharacters($(this));
  });
  $("#description").keyup (function (event) {
    LimitCharacters($(this));
  });

  function LimitCharacters(description) {
    if (description.val().length > nMaxLength) {
      description.val(description.val().substring(0, nMaxLength));
    }else {
      var nRemaining = nMaxLength - description.val().length;
      $('.remaining').text(nRemaining);
    }
  }
});


//for making background image by JQUERY
$(document).ready(function(){
  $('[data-bg-img]').each(function(){
    $(this).css({
      'background-image' : 'url(' + $(this).data('bg-img') + ')'
    }).removeAttr('data-bg-img').addClass('bg-image');
  })
});


// to make a scroll UP BUTTON
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
  });
});

//to make limited characters in input text
// $(function () {
//   var nMaxLength = 150;
//   $('.remaining').text(nMaxLength);
//   $("#description").keydown(function (event) {
//     LimitCharacters($(this));
//   });
//   $("#description").keyup (function (event) {
//     LimitCharacters($(this));
//   });
//
//   function LimitCharacters(description) {
//     if (description.val().length > nMaxLength) {
//       description.val(description.val().substring(0, nMaxLength));
//     }else {
//       var nRemaining = nMaxLength - description.val().length;
//       $('.remaining').text(nRemaining);
//     }
//   }
// });

var username = document.forms["vform"]["username"];
var password = document.forms["vform"]["password"];
var passwordConfimation = document.forms["vform"]["passwordConfimation"];

var name_error = document.getElementById("name_error");
var passwordError = document.getElementById("passwordError");
var passwordCError = document.getElementById("passwordCError");


username.addEventListener("blur", nameVerify, true);
password.addEventListener("blur", passwordVerify, true);
passwordConfimation.addEventListener("blur", passwordCVerify, true);


function Validate() {
  if (username.value == "") {
    username.style.border = "1px solid red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password is required";
    password.focus();
    return false;
  }
  if (passwordConfimation.value == "") {
    passwordConfimation.style.border = "1px solid red";
    passwordCError.textContent = "Password Confirmation is required";
    passwordConfimation.focus();
    return false;
  }
  if (password.value !=passwordConfimation.value) {
    password.style.border = "1px solid red";
    passwordConfimation.style.border = "1px solid red";
    passwordCError.innerHTML = "Passwords doesnt match"
    return false;
  }
  else {
    alert("You registered succesfully!")
  }
}

function nameVerify() {
  if (username.value != "") {
    name_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}
function passwordCVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}

let button = document.querySelector(".btn");
button.disabled = false;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);
passwordConfimation.addEventListener("change", stateHandle);

function stateHandle() {
    if ((document.querySelector(".uname").value === "") ||
    (document.querySelector(".passwd").value === "")  ||
    (document.querySelector(".cpasswd").value === "")) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }s
}

//for animating the background
function background() {
      var x = document.getElementById(h1);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
