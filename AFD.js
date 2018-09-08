class AFD{

    constructor(alphabet, q0, F, transitionTable){
        this.alphabet = alphabet;
        this.q0 = q0;
        this.F = F;
        this.transitions = transitionTable;
        this.backtrack = [];
    }

    getTransitions(){
        return JSON.parse(JSON.stringify(this.transitions));
    }

    getVisitedNodes(){
        return this.backtrack;
    }

    // Returns true if automata accepts the word
    accepts(word){
        // restart the backtrack queue
        this.backtrack = [];
        // Verify that every symbol belongs to the alphabet
        for (var char of word){
            if (!this.alphabet.has(char)) return false;
        }
        let q = this.q0;
        q = this.transitionFunc(q, word);
        if (this.F.has(q)) { 
            return true;
        }
        return false;
    }

    transitionFunc(q, word){
        // Base case
        if (word.length === 0){
            this.backtrack.push(q);
            return q;
        }
        let w = word.slice(0, -1);
        let o = word.slice(-1);
        // Get the state that will result from w
        q = this.transitionFunc(q, w);
        q = this.transitions[q][o];
        this.backtrack.push(q);
        return q
    }
}

module.exports = AFD;