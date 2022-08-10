let user = document.getElementById("user")
let pass = document.getElementById("pass")
let mmm = document.getElementById("mmm")
let kkk = document.getElementById("kkk")

let login = {
    username = koksi,
    password = koksi11
}

function clicked(){
    console.log(clicked)
   
    if(user.value == login.username){
        if(pass.value == login.password){
            kkk.textContent = "login succesful"
        }
    }else{
        mmm.textContent = "Incorrect password"
    }
}