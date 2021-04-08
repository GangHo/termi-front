function ajax(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    var email = document.getElementById("emailAddress").value;
    var password = document.getElementById("password").value;
    var data = {
        "email" : email,
        "password" : password 
    };

    xhr.onreadystatechange = function(data) {
        if(xhr.readyState == xhr.DONE) {
            if(xhr.status == 200) {
                console.log(xhr.responseText);
                var json = JSON.parse(xhr.responseText);
                localStorage.setItem('token',json.token);
                alert(email + " Login success");
            }else {
                console.error(xhr.responseText);
            }
        }
    };

    xhr.open("POST","http://localhost:8080/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    

}