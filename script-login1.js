document.getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;
          let errorMessage = document.getElementById("error-message");

          if (username === "admin" && password === "1234") {
            errorMessage.textContent = "";
            alert("Login bem-sucedido!");
          
          } else {
            errorMessage.textContent = "Usuário ou senha inválidos!";
          }
        });