const express = require('express');
const app = express();
app.use('/users', require('./users'));
app.get('/', (req, res) => {
    res.send('유종효특: 병신tv봄 얼라이언스임 시키는거 안함\n' + res.connection.localPort);
});
app.listen(80, () => {
    console.log('Example router listening');
});
//# sourceMappingURL=server.js.map