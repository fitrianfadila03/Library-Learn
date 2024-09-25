document.getElementById("signInButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const doublePassword = document.getElementById("doublePassword").value;
  
    if (!email || !password || !doublePassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== doublePassword) {
      alert("Passwords do not match.");
      return;
    }
    window.location.href = 'index.html';
  
    alert("Sign-in successful!");
  });