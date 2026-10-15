export type TileState = "correct" | "present" | "absent";

export function checkGuess(guess: string, solution:string): TileState[]{
    const result: TileState[] = Array(guess.length).fill("absent");
    const remaining: Record<string, number> = {};

    //green tiles first
    for (let i =0; i< guess.length; i++){
        if(guess[i]===solution[i]){
            result[i]= "correct"
        }
        else{
            remaining[solution[i]] = (remaining[solution[i]??0])+1;
        }
    }

    for (let i =0 ; i<guess.length; i++){
        if(result[i]==="correct") continue;
        if((remaining[guess[i]]??0)>0){
            result[i]="present";
            remaining[guess[i]]--;
        }
    }
    return result;
}

const RANK = {absent :0, present: 1, correct: 2} as const;

export function keyboardStates(guesses:string[], solution:string): Record<string, TileState>{
    const out: Record<string, TileState> = {};
    for( const g of guesses){
        checkGuess(g,solution).forEach((s,i)=>{
            const cur = out[g[i]];
            if(!cur || RANK[s]> RANK[cur]){
                out[g[i]]=s;
            }
        });
    }
    return out;
}