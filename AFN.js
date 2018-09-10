class AFN{

    constructor(alphabet, q0, F, transitionTable){
        this.alphabet = alphabet;
        this.q0 = q0;
        this.F = F;
        this.transitions = transitionTable;
        this.backtrack = [];
    }

    getTransitions(){
        return this.transitions;
    }

    getF(){
        return this.F;
    }

    getVisitedNodes(){
        return this.backtrack;
    }

    // Returns true if automata accepts the word
    accepts(word){
        // Reset the backtrack
        this.backtrack = [];
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
            // See if p can be accessed from q e A through an epsilon transition
            for (var q of A) {
                let P = this.transitions[q][''];
                if (P) {
                    // There exists an epsilon transition from q and it reaches p:
                    for (var p of P){
                        // Add to set reachable states p
                        A.add(p);
                    }
                }
            }
            this.backtrack.push(new Set(A));
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

        // See if p can be accessed from qs through an epsilon transition
        for (var qs of q) {
            let P = this.transitions[qs][''];
            if (P) {
                // There exists an epsilon transition from qs and it reaches p:
                for (var p of P){
                    // Add to q reachable states p
                    q.add(p);
                }
            }
        }
        this.backtrack.push(new Set(q));
        return;
    }
}