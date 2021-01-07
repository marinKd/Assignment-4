function buttonClick(){
    let user = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if(pass == "12345678"){
        document.getElementById("message").innerText="The user " + user + " with email " + email + " is on.";
    } else {
        alert("The password is incorrect");
    }
  }