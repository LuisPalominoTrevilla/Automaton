// Define Alphabet
const alphabet_1 = new Set();
alphabet_1.add('');
alphabet_1.add('a');
alphabet_1.add('b');
// Define Final states set
const F_1 = new Set();
F_1.add('q1').add('q2');
// Define transitions table
let transitions_1 = {
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