
const React = require('react')

function newArmory(props) {
    return (
        <div>
                <h1>Buy Armor</h1>
                <form action="/Armory" method="POST"> <br/>
                Name: <input type = "text" name ="name"/><br/>
                Magic-property: <input type = "text" name="magicproperty"/><br/>
                Forge and Buy Item: <input type="checkbox" name="buyitem"/><br/>
                <input type="submit" value="Create armor" /><br/>
                </form>
            </div>
       
    )
}

module.exports = newArmory
