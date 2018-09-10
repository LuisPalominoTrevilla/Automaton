// Define Alphabet
const alphabet_2 = new Set();
alphabet_2.add('');
alphabet_2.add('a');
alphabet_2.add('b');
alphabet_2.add('c');
// Define Final states set
const F_2 = new Set();
F_2.add('q0');
// Define transitions table
let transitions_2 = {
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