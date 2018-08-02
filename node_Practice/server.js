const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let users = [
    { id: 1, name: 'cha' },
    { id: 2, name: 'kim' },
    { id: 3, name: 'rtr' }
];
app.get('/', (req, res) => {
    res.send('유종효특: 병신tv봄 얼라이언스임 시키는거 안함\n' + res.connection.localPort);
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
    let user = users.filter(user => { return user.id === id; })[0];
    if (!user) {
        return res.status(404).json({ error: 'unknown user' });
    }
    return res.json(user);
});
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }
    const userIdx = users.findIndex(user => user.id === id);
    if (userIdx === -1) {
        return res.status(404).json({ error: 'Unknown user' });
    }
    users.splice(userIdx, 1);
    res.status(204).send();
});
app.post('/users', (req, res) => {
    const name = req.body.name || '';
    if (!name.length)
        return res.status(400).json({ error: 'incorrenct name' });
    const id = users.reduce((maxId, user) => { return user.id > maxId ? user.id : maxId; }, 0) + 1;
    const newUser = { id: id, name: name };
    users.push(newUser);
    return res.status(201).json(newUser);
});
//# sourceMappingURL=server.js.map