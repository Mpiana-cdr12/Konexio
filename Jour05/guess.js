const prompt = require ("prompt");

prompt.start();

const mysterNum = Math.floor(Math.random()*100);

function play(){
    prompt.get({name: "q", description : "Quel est le nombre mystère ?"}),
    function (err, res){
        if (parseInt(res.numUser) === mysteryNum) {
            console.log("Bravo");
            else if (res.numUser > mysteryNum) {
                console.log("C'est moins");
                
            }
        }
    }
}