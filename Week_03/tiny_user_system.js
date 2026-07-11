

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

// const user = new User("Shatil", "shatil@gmail.com");
// console.log(user.getInfo());

const users = [];
const names = [
    'Shatil', 'Rafiq', 'Sumon', 'Nadia', 'Tahsin',
    'Fahim', 'Shila', 'Mamun', 'Jannat', 'Rakib',
    'Nisha', 'Kamal', 'Sadia', 'Hasan', 'Rima',
    'Shuvo', 'Tania', 'Forhad', 'Liza', 'Noman'
];

for(let i = 0; i < 20; i++){
    
    const email = `${names[i].toLowerCase()}@gmail.com`;
    const user = new User(names[i], email);
    users.push(user);
}

const firstLogin = users[0].login;
const allShareLogin = users.every(user => user.login == firstLogin);
console.log(allShareLogin);

console.log("------All 20 users-------");
users.forEach((user, index)=>{
   console.log(`${index + 1}. ${user.username} (${user.useremail}) - ${user.isLogIn ? 'Online' : 'Offline'}`);
});