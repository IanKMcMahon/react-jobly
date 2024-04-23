const express = require('express')
const { Client } = require("pg");
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/test', async (req, res) => { 
    console.log('HEY!')
    await dbConnectionTest();
 })

async function dbConnectionTest(){
    const client = new Client({ user: "ian_mcmahon", password: "cascadia8", host: "localhost", database: "jobly", port: '5432' });
    console.log(client)
    client.connect();
    let res = await client.query('SELECT * FROM companies');
    console.log(res.rows)
    }
