let login = prompt('Enter Your Username:');

if(login == "admin"){
    let password = prompt("Enter Your Admin Password");
        if(password == "TheMaster"){
            alert("Welcome Admin!");
        }else if(password == null || password == ""){
            alert("Cancelled");
        }else{
            alert("WRONG ASS PASSWORD");
        }
}else if( login == null || login == ""){
    alert("Cancelled");
}else{
    alert("I DONT KNOW YOU NIGGA");
}