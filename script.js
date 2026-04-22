function saveData() {
  let user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    goals: document.getElementById("goals").value,
    comfort: document.getElementById("comfort").value,
    song: document.getElementById("song").value,
    fav: document.getElementById("fav").value,
    flowers: document.getElementById("flowers").value,
    gift: document.getElementById("gift").value
  };

  localStorage.setItem("userData", JSON.stringify(user));
  window.location.href = "success.html";
}

function openLetter() {
  let data = JSON.parse(localStorage.getItem("userData"));

  let message = `
  Hey ${data.name} 💗
  
  I know you're working towards ${data.goals}.
  Even when things feel hard, remember what comforts you: ${data.comfort}.
  
  Take a deep breath. You're doing better than you think.
  
  Your bestie 💌
  `;

  document.getElementById("message").innerText = message;
  document.getElementById("letter").style.display = "block";
}

function checkPass() {
  let pass = document.getElementById("pass").value;

  if (pass === "bestie123") {
    document.getElementById("adminPanel").style.display = "block";

    let data = localStorage.getItem("userData");
    document.getElementById("data").innerText = data;
  } else {
    alert("Wrong password!");
  }
}
