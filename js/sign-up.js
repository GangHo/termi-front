function ajax(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    var name = document.getElementById("name").value;
    var email = document.getElementById("emailAddress").value;
    var password = document.getElementById("password").value;
    
    var data = {
        "name" : name,
        "email" : email,
        "password" : password 
    };

    xhr.onreadystatechange = function(data) {
        if(xhr.readyState == xhr.DONE) {
            if(xhr.status == 200) {
                console.log(xhr.responseText);
                alert(email + " Sign Up success");
            }else {
                console.error(xhr.responseText);
            }
        }
    };

    xhr.open("POST","http://localhost:8080/members");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    

}