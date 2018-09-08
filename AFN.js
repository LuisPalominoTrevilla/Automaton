class AFN{

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
        let A = new Set();
        // Add initial state to set
        A.add(this.q0);
        // Call deltaTestate on the word
        this._deltaTestate(A, word);
        for (var state of A){
            if (this.F.has(state)) { 
                return true;
            }
        }
        return false;
    }

    _deltaTestate(A, word){
        // Base case
        if (word.length === 0){
            return;
        }
        let w = word.slice(0, -1);
        let a = word.slice(-1);
        // Recursively fill the states
        this._deltaTestate(A, w);
        this._delta(A, a);
        
        return;
    }

    _delta(q, a){
        if (a.length !== 1){
            return;
        }
        // Set the states
        let newStates = new Set();
        for (var state of q){
            // Union operator
            newStates = new Set([...this.transitions[state][a], ...newStates]);
        }
        q.clear();
        for(var state of newStates){
            q.add(state);
        }
    }
}

module.exports = AFN;