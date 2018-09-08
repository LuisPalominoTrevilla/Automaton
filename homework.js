const AFD = require('./AFD');

// Define Alphabet
const alphabet = new Set();
alphabet.add('');
alphabet.add('a');
alphabet.add('b');
// Define Final states set
const F = new Set();
F.add('q1').add('q2');
// Define transitions table
let transitions = {
    q0: {
        'a': 'q1',
        'b': 'q2'
    },
    q1: {
        'a': 'q1',
        'b': 'q1'
    },
    q2: {
        'a': 'q3',
        'b': 'q1'
    },
    q3: {
        'a': 'q3',
        'b': 'q3'
    }
}

afd = new AFD(alphabet, 'q0', F, transitions);
console.log(afd.accepts('bab'));