function UserNew(name,uName,age,pwd){
    this.name = name;
    this.uName = uName;
    this.age = age;
    this.pwd = pwd;
}

var users = [{name:'amit',uName:'amit.singh',age:'23',pwd:'123'}];

module.exports = function checkAvailable(name,uName,age,pwd){
    var status =  users.some(function(val){
     return val.uName === uName;
    })
    if(status) return 'The user name already exist'
    var newUser = new UserNew(name,uName,age,pwd)
    users.push(newUser)
    return 'User Name available.User registered'
}