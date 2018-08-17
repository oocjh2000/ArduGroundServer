const Express = require('express');
const bodyParser = require('body-parser');
const router = Express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let users = [
    { id: 0, name: 'test', hp: 100 }
];



router.delete('/reset', (req, res) => {
    console.log('초기화');
    users = [
        { id: 0, name: 'test', hp:100 }
    ];
    res.status(200).send(users).json
});

router.get('/', (req, res) => {
    res.status(200).json(users);
    console.log('asdf');
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log(id+'유저조회');

    if (!id) {
        return res.status(400).json({ error: 'inocerrect id' });
    }

    let user = users.filter(user => { return user.id === id; })[0]

    if (!user) {
        return res.status(404).json({ error: 'unknown user' });
    }

    return res.json(user);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }

    const userIdx = users.findIndex(user => user.id === id);
    if (userIdx === -1) {
        return res.status(404).json({ error: 'Unknown user' });
    }
  
    console.log(id+'유저 삭제');
    users.splice(userIdx, 1);
    res.status(204).send();
});



router.post('/', (req, res) => {

    console.log(req.body.name+ '유저생성');
    const name = req.body.name || '';
    
   
    if (!name.length) return res.status(400).json({ error: 'incorrenct name' });
    const id = users.reduce((maxId, user) => { return user.id > maxId ? user.id : maxId }, 0) + 1;
    const newUser = { id: id, name: name, hp:100 };
    users.push(newUser);
    return res.status(201).json(newUser);

});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const hp = parseInt(req.body.hp, 10);
   
   

    users[id].hp = hp;
    console.log(id + '번유저 피격');
    return res.status(200).json(users[id]);
});


module.exports = router;