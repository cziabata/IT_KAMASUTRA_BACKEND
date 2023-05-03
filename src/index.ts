const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req: any, res: any) => {
    
   res.send("Hello World!11");
})

app.listen(PORT, () => {
    console.log(`App started at port ${PORT}`)
})
