const value = require("./module_import")

const { name,age } = require("./var")

function woosangAge(number){
    if( name == 'ywoosang'){
        return age
    }else {
        return age -1 
    }
}
checkOddorEven()

module.exports = {
    woosangAge,
    name,
    age
}

