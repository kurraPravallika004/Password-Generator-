function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?";
  const input = document.getElementById("length");
  const output = document.getElementById("result");
  const passlen = parseInt(input.value);

  if (isNaN(passlen) || passlen < 1) {
    output.textContent = "Please enter a valid number.";
  } else if (passlen > chars.length) {
    output.textContent = `Error: Max password length is ${chars.length}.`;
  } else {
    const password = [...chars].sort(() => 0.5 - Math.random()).slice(0, passlen).join('');
    output.textContent = `Generated Password: ${password}`;
  }
}
