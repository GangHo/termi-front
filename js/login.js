$(".login-form").validate({
    rules: {
        email: {
            required: true,
            minlength: 4
        },
        password: {
            required: true,
            minlength: 5
        }
    },
    //For custom messages
    messages: {
        email: {
            required: "Enter a email",
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

$(".login-form button[type=submit]").click(loginEvent);

function loginEvent(e) {
    e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();
    var sendData = {"email" : email, "password" : password};

    //sendData.password = '$2a$10$gybCgirqWCOdeN30cEVWUO5MrBz7u.3qW5xTHeJmdvBexTVpFQbjC';

    $.ajax({
        type : "POST",
        url : "http://localhost:8080/login",
        dataType : "json",
        data : JSON.stringify(sendData),
        contentType : "application/json",
        async : true,
        success:function(sendData) {

            console.log(sendData);
            alert(email + " Login success");
        },
        error : function() {
            console.log("Login error");
        }

    });
}