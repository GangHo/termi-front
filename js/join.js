$(".login-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 4
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5
    },
    cpassword: {
      required: true,
      minlength: 5,
      equalTo: "#password"
    }
  },
  //For custom messages
  messages: {
    username: {
      required: "Enter a username",
      minlength: "Enter at least 4 characters"
    }
  },
  errorElement: 'div',
  errorPlacement: function (error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  }
});

$(".login-form button[type=submit]").click(joinEvent);

function joinEvent(e) {
  e.preventDefault();

  var name = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();

  var sendData = { "name": name, "email": email, "password": password };

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/members",
    data: JSON.stringify(sendData),
    dataType: "json",
    contentType: "application/json",
    async: true,
    success: function () {

      //console.log(sendData);
      alert(name + "Join success");
    },
    error: function () {
      console.log("Join error");
    }
  });

}