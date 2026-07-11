
function User(username, useremail){
      this.username = username;
      this.useremail = useremail;
      this.isLogIn = false;
}

User.prototype.login = function(){
    this.isLogIn = true;
    console.log(this.username + ' logged in');
    return this;
}

User.prototype.logout = function(){
    this.isLogIn = false;
    console.log(this.username + ' logged out');
    return this;
}

User.prototype.rename = function(newName){
    this.username = newName;
    console.log('Changed name:', this.username);
    return this;
}

User.prototype.getInfo = function() {
    return {
        username: this.username,
        email: this.useremail,
        status: this.isLoggedIn ? 'online' : 'offline'
    };
};

const user = new User("Shatil", "shatil@gmail.com");
console.log(user.getInfo());

