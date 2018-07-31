﻿const express = require('express');
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
    res.send('h/w');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
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