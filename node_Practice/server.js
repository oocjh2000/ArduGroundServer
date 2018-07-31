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
    res.send('h/w');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
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