
const OpenAI  = require("openai");
const express = require('express')

const openai = new OpenAI({
  apiKey: "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"
});

const openFun = async()=>{
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: "This story begins",
        max_tokens: 30,
        temperature:0,
      });
      console.log(completion.choices[0].text);
}

openFun();

// create a simple express api that calls a function


const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World!')
});

app.listen(port,()=>{
    console.log(`Example app listeniing at http://localhost:${port}`)
});