let email = document.getElementById("email");
let password = document.getElementById("password");

// console.log(email);

const form = document.querySelector(".login-button");

// console.log(form);

const listContainer = document.getElementById("list-container");
const li = document.createElement("li");

let movie = document.getElementsByClassName("addCart");
let EndGame = document.querySelector("#endgame");
EndGame.addEventListener("click", (e) => {
  console.log("s,djjbbvkj");
  li.innerHTML = "Avengers EndGame";
  listContainer.appendChild(li);
});

// const handleSubmit= (e) => {
//     // e.preventDefault();
//     console.log('heuygjk')
//     const data = new formData(e.target)
//     const email = data.get("email")
//     console.log(email);
//     const password = data.get("password")
//     localStorage.removeItem("data")
//     saveEmail()
// }

// function saveEmail ()  {
//     let newData = email.value
//     console.log(newData)
//     if(localStorage.getItem('data') == null){
//         localStorage.setItem('data','[]')
//     }
//     let oldData = JSON.parse(localStorage.getItem('data'))
//     oldData.push(newData);

//     localStorage.setItem('data' , JSON.stringify(oldData))
// }
