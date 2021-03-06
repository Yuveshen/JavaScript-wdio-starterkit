class Login {
  get email () { return $('input[name="email"]') }
  get password () { return $('input[name="password"]') }
  get submitBtn () { return $('button*=Login') }
  get signupLink () { return $('*=Sign Up') }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submitBtn.click();
  }

  isLoggedIn () {
    return browser.getUrl().includes('logged-in.html');
  }
}

module.exports = Login;