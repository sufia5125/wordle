//take the csv inputs, give json outputs at build time.

const validGuessPath = "/data/valid_guesses.csv"
const allSolutionPath = "/data/all_solutions.csv"


function validGuesstoJSON(csv){
    var lines = csv.split('\n');
    if (lines.length === 0) return "[]";
    var result = []
    for (let i = 0; i < lines.length; i++){
        let obj = {};
        

    }
}

function allSolutiontoJSON(csv){

}