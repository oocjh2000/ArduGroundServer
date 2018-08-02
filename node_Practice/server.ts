const express = require('express');
const app = express();

let users = [
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
    console.log(`I am ${this.name}`);
    return this;
};

var chris = new User('chris');

chris.greeting().introduce();

app.get('/', (req, res) => {
    res.send('유종효특: 병신tv봄 얼라이언스임 시키는거 안함\n'+res.connection.localPort);
});

app.listen(80, () => {
    console.log('Example app listening');
});

app.get('/users', (req, res) => {
    res.json(users);
    console.log('asdf');
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({ error: 'inocerrect id' });
    }

    let user = users.filter(user => { return user.id === id; })[0]

    if (!user) {
        return res.status(404).json({ error: 'unknown user' });
    }

    return res.json(user);
});