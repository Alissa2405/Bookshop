import  express from 'express';
const app = express ()

const PORT = 3000

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})

app.get('/', (req, res)=>{
    res.status(212).send("Hello There!")
})
app.get('/shop', (req, res)=>{
    res.status(212).send("Hey You!")
})
app.get('/shop/:id', (req, res)=>{
    const data = req.params
    res.status(212).send(`<a href='/'> Book: ${data.id}</a>`)
})

