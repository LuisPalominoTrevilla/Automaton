class AFD{

    constructor(alphabet, q0, F, transitionTable){
        this.alphabet = alphabet;
        this.q0 = q0;
        this.F = F;
        this.transitions = transitionTable;
    }

    getTransitions(){
        return JSON.parse(JSON.stringify(this.transitions));
    }

    // Returns true if automata accepts the word
    accepts(word){
        // Verify that every symbol belongs to the alphabet
        for (var char of word){
            if (!this.alphabet.has(char)) return false;
        }
        let states = new Set();
        states.add(this.q0);
        this.transitionFunc(states, word);
        for (var state of states){
            if (this.F.has(state)) { 
                return true;
            }
        }
        return false;
    }

    transitionFunc(q, word){
        // Base case
        if (word.length === 0){
            return;
        }
        let w = word.slice(0, -1);
        let o = word.slice(-1);
        // Recursively fill the states
        this.transitionFunc(q, w);
        // Set the states
        let newStates = new Set();
        for (var state of q){
            newStates.add(this.transitions[state][o]);
        }
        q.clear();
        for(var state of newStates){
            q.add(state);
        }
    }
}

module.exports = AFD;