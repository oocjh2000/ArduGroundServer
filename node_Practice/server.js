const express = require('express');
const app = express();
app.use('/users', require('./users'));
app.get('/', (req, res) => {
    res.send('Welcome to ArduGround!' + res.connection.localPort);
});
app.listen(80, () => {
    console.log('Example router listening');
});
//# sourceMappingURL=server.js.map