$(document).ready(function (e) {
  $("#btn-search").click(function () {
    var sEmail = $("#searchtxt").val();
    // Checking Empty Fields
    if ($.trim(sEmail).length == 0) {
      $(".search-form").addClass("error");
      //alert('Enter Email Address');
      return false;
    }
    if (validateEmail(sEmail)) {
      $(".search-form").removeClass("error");
      window.location = "result.html?email=" + sEmail;
    } else {
      $(".search-form").addClass("error");
      //alert('Invalid Email Address');
      e.preventDefault();
    }
  });

  var params = new window.URLSearchParams(window.location.search);
  var emailVal = params.get("email");

  $.ajax({
    url: "/user?email=" + emailVal,
    dataType: "json",
    success: function (result, status) {
      $("#user-name").text(result.first_name);
      $("#user-age").text(result.age);
      $("#user-description").text(result.description);
      $("#user-address").text(result.address);
      $("#user-email").text(result.email);
      $("#user-phone_numbers1").text(result.phone_numbers[0]);
      $("#user-phone_numbers2").text(result.phone_numbers[1]);
      $("#user-phone_numbers3").text(result.phone_numbers[2]);
      $("#user-relatives1").text(result.relatives[0]);
      $("#user-relatives2").text(result.relatives[1]);
    },
  });
});

// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (filter.test(sEmail)) {
    return true;
  } else {
    return false;
  }
}
