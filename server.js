const express = require('express')
const app = express()
const PORT = 3000



app.get('/home', (req,res) => {
res.send(`<h1>Welcome to the Mythical Armory and emporium </h1>
<a href="/Armory">Armory</a> <br/>
<a href="/Weapons">Weapons</a> <br/>
<a href="/Grimoires">Grimoires</a> <br/>
<a href="/MagicScrolls">Magic Scrolls</a> <br/>
<a href="/Gems">Gems</a> <br/>
<img src="https://i.pinimg.com/originals/02/11/47/021147693104856bcc32aac06f4c7143.jpg" class="magicshop"/>`)
})

app.get('/Armory', (req,res) => {
    res.send(`<h1>Armor for Sale</h1>
    <a href="/home">Return to Front Desk</a>
    <img src="https://media.mmo-champion.com/images/news/2011/october/tier0compilation.jpg"></img>
            
    `)
    res.render('magicshop/New')

    

})
 app.get('/Weapons', (req,res) => {
    res.send(`<h1>Weapons for Sale</h1>
    <a href="/home">Return to Front Desk</a>
    
    <div>
    <h1>Buy Weapons</h1>
    <form action="/Armory" method="POST"> <br/>
    Name: <input type = "text" name ="name"/><br/>
    Magic-property: <input type = "text" name="magicproperty"/><br/>
    Forge and Buy Item: <input type="checkbox" name="buyitem"/><br/>
    </form>
</div>
<img src="https://i.pinimg.com/originals/43/0f/a4/430fa4854557685dbd79d9b69e442f3d.jpg">
    
    `)
 })
 app.get('/Grimoires', (req,res) => {
    res.send(`<h1>Grimiore Library</h1>
    <a href="/home">Return to Front Desk</a>
    
    <div>
    <h1>Buy Grimoires</h1>
    <form action="/Armory" method="POST"> <br/>
    Name: <input type = "text" name ="name"/><br/>
    Magic-property: <input type = "text" name="magicproperty"/><br/>
    Forge and Buy Item: <input type="checkbox" name="buyitem"/><br/>
    </form>
</div>
<img src="https://i.pinimg.com/originals/96/f4/a5/96f4a56989a74d945bd689cb2fe040b6.jpg">

    `)
 })
 app.get('/MagicScrolls', (req,res) => {
    res.send(`<h1>Magic Scrolls for Sale</h1>
    <a href="/home">Return to Front Desk</a>
    
    <div>
    <h1>Buy Magic Scrolls</h1>
    <form action="/Armory" method="POST"> <br/>
    Name: <input type = "text" name ="name"/><br/>
    Magic-property: <input type = "text" name="magicproperty"/><br/>
    Forge and Buy Item: <input type="checkbox" name="buyitem"/><br/>
    </form>
</div>
<img src="https://hobbytowndnd.files.wordpress.com/2018/10/magic_scroll.png">
    
    `)
 })
 app.get('/Gems', (req,res) => {
    res.send(`<h1>Magic Infused Gems</h1>
    <a href="/home">Return to Front Desk</a>
    
    <div>
    <h1>Buy Magic Gems</h1>
    <form action="/Armory" method="POST"> <br/>
    Name: <input type = "text" name ="name"/><br/>
    Magic-property: <input type = "text" name="magicproperty"/><br/>
    Forge and Buy Item: <input type="checkbox" name="buyitem"/><br/>
    </form>
</div>
<img src="https://cdn3.vectorstock.com/i/1000x1000/51/77/magic-gems-gem-stones-jewels-diamonds-gemstone-vector-24595177.jpg">
    
    `)
 })

 



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})