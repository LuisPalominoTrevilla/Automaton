const AFN = require('./AFN');

// Define Alphabet
const alphabet = new Set();
alphabet.add('');
alphabet.add('a');
alphabet.add('b');
// Define Final states set
const F = new Set();
F.add('q0');
// Define transitions table
/* let transitions = {
    q0: {
        'a': new Set().add('q1').add('q4'),
        'b': new Set().add('q3')
    },
    q1: {
        'a': new Set().add('q1'),
        'b': new Set().add('q2')
    },
    q2: {
        'a': new Set(),
        'b': new Set()
    },
    q3: {
        'a': new Set(),
        'b': new Set()
    },
    q4: {
        'a': new Set(),
        'b': new Set().add('q4')
    }
} */
let transitions = {
    q0: {
        'a': new Set().add('q1').add('q2'),
        'b': new Set()
    },
    q1: {
        'a': new Set(),
        'b': new Set().add('q0')
    },
    q2: {
        'a': new Set().add('q1'),
        'b': new Set().add('q3')
    },
    q3: {
        'a': new Set().add('q0'),
        'b': new Set()
    }
}
/* let transitions = {
    q0: {
        'a': new Set().add('q0').add('q1'),
        'b': new Set().add('q1')
    },
    q1: {
        'a': new Set(),
        'b': new Set().add('q1').add('q0')
    }
} */

afn = new AFN(alphabet, 'q0', F, transitions);
console.log(afn.accepts('aababaabaabaabab'));