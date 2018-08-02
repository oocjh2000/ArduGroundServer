var express = require('express');
var app = express();
var users = [
    { id: 1, name: 'cha' },
    { id: 2, name: 'kim' },
    { id: 3, name: 'rtr' }
];
function User(_name) {
    this.name = _name;
}
User.prototype.greeting = function () {
    console.log('Hello! ');
    return this;
};
User.prototype.introduce = function () {
    console.log("I am " + this.name);
    return this;
};
var chris = new User('chris');
chris.greeting().introduce();
app.get('/', function (req, res) {
    res.send('유종효특: 병신tv봄 얼라이언스임 시키는거 안함\n' + res.connection.localPort);
});
app.listen(80, function () {
    console.log('Example app listening');
});
app.get('/users', function (req, res) {
    res.json(users);
    console.log('asdf');
});
app.get('/users/:id', function (req, res) {
    console.log(req.params.id);
    var id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'inocerrect id' });
    }
    var user = users.filter(function (user) { return user.id === id; })[0];
    if (!user) {
        return res.status(404).json({ error: 'unknown user' });
    }
    return res.json(user);
});
//# sourceMappingURL=server.js.map