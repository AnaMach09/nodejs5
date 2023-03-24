const express = require('express');
const router = require('./routes');

const PORT = 5001;

const app = express();
app.use(express.json());

app.use('/api', router);

// app.use((req,res) => {
// return res.json({
//     message: 'true'
// })
// })
app.post('/',(req,res) => {
    console.log(req.body)
})

app.listen(PORT,() => {
    console.log(`server is listening to port ${PORT}`)
});