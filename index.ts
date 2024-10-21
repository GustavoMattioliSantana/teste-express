import express from 'express';

const app = express();
app.use(express.json())

app.get("/cep/:cep", async (req, res)=>{

    const cep = req.params.cep;
    const address = 
        await fetch(`viacep.com.br/ws/${cep}/json/`)

    res.json({ address: await address.json()})
})

app.listen(3001, ()=>{
    console.log("iniciou o servidor")
})
