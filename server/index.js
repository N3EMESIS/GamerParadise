require('dotenv').config();

const server = require('./src/app');
const { conn } = require('./src/db');

const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    });
});