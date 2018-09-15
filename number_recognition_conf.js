// Define Alphabet
const NUMBERS = "0123456789";
const CHARACTERS = "ABCDEFabcdef";
const alphabet_2 = new Set();
alphabet_2.add('');
alphabet_2.add('x');
alphabet_2.add('X');
alphabet_2.add('-');
alphabet_2.add('+');
alphabet_2.add('.');
for (var num of NUMBERS){
    alphabet_2.add(num);
}
for(var letter of CHARACTERS){
    alphabet_2.add(letter);
}
// Define Final states set
const F_2 = new Set();
F_2.add('q1');
F_2.add('q2');
F_2.add('q3');
F_2.add('q5');
F_2.add('q8');
F_2.add('q10');
// Define transitions table
let transitions_2 = {
    q0: {
        '0': new Set().add('q2'),
        '1': new Set().add('q1'),
        '2': new Set().add('q1'),
        '3': new Set().add('q1'),
        '4': new Set().add('q1'),
        '5': new Set().add('q1'),
        '6': new Set().add('q1'),
        '7': new Set().add('q1'),
        '8': new Set().add('q1'),
        '9': new Set().add('q1'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q1: {
        '0': new Set().add('q1'),
        '1': new Set().add('q1'),
        '2': new Set().add('q1'),
        '3': new Set().add('q1'),
        '4': new Set().add('q1'),
        '5': new Set().add('q1'),
        '6': new Set().add('q1'),
        '7': new Set().add('q1'),
        '8': new Set().add('q1'),
        '9': new Set().add('q1'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set().add('q7')
    },
    q2: {
        '0': new Set().add('q3').add('q6'),
        '1': new Set().add('q3').add('q6'),
        '2': new Set().add('q3').add('q6'),
        '3': new Set().add('q3').add('q6'),
        '4': new Set().add('q3').add('q6'),
        '5': new Set().add('q3').add('q6'),
        '6': new Set().add('q3').add('q6'),
        '7': new Set().add('q3').add('q6'),
        '8': new Set().add('q6'),
        '9': new Set().add('q6'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set().add('q4'),
        'X': new Set().add('q4'),
        '+': new Set(),
        '-': new Set(),
        '.': new Set().add('q7')
    },
    q3: {
        '0': new Set().add('q3'),
        '1': new Set().add('q3'),
        '2': new Set().add('q3'),
        '3': new Set().add('q3'),
        '4': new Set().add('q3'),
        '5': new Set().add('q3'),
        '6': new Set().add('q3'),
        '7': new Set().add('q3'),
        '8': new Set(),
        '9': new Set(),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q4: {
        '0': new Set().add('q5'),
        '1': new Set().add('q5'),
        '2': new Set().add('q5'),
        '3': new Set().add('q5'),
        '4': new Set().add('q5'),
        '5': new Set().add('q5'),
        '6': new Set().add('q5'),
        '7': new Set().add('q5'),
        '8': new Set().add('q5'),
        '9': new Set().add('q5'),
        'a': new Set().add('q5'),
        'b': new Set().add('q5'),
        'c': new Set().add('q5'),
        'd': new Set().add('q5'),
        'e': new Set().add('q5'),
        'f': new Set().add('q5'),
        'A': new Set().add('q5'),
        'B': new Set().add('q5'),
        'C': new Set().add('q5'),
        'D': new Set().add('q5'),
        'E': new Set().add('q5'),
        'F': new Set().add('q5'),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q5: {
        '0': new Set().add('q5'),
        '1': new Set().add('q5'),
        '2': new Set().add('q5'),
        '3': new Set().add('q5'),
        '4': new Set().add('q5'),
        '5': new Set().add('q5'),
        '6': new Set().add('q5'),
        '7': new Set().add('q5'),
        '8': new Set().add('q5'),
        '9': new Set().add('q5'),
        'a': new Set().add('q5'),
        'b': new Set().add('q5'),
        'c': new Set().add('q5'),
        'd': new Set().add('q5'),
        'e': new Set().add('q5'),
        'f': new Set().add('q5'),
        'A': new Set().add('q5'),
        'B': new Set().add('q5'),
        'C': new Set().add('q5'),
        'D': new Set().add('q5'),
        'E': new Set().add('q5'),
        'F': new Set().add('q5'),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q6: {
        '0': new Set().add('q6'),
        '1': new Set().add('q6'),
        '2': new Set().add('q6'),
        '3': new Set().add('q6'),
        '4': new Set().add('q6'),
        '5': new Set().add('q6'),
        '6': new Set().add('q6'),
        '7': new Set().add('q6'),
        '8': new Set().add('q6'),
        '9': new Set().add('q6'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set().add('q7')
    },
    q7: {
        '0': new Set().add('q8'),
        '1': new Set().add('q8'),
        '2': new Set().add('q8'),
        '3': new Set().add('q8'),
        '4': new Set().add('q8'),
        '5': new Set().add('q8'),
        '6': new Set().add('q8'),
        '7': new Set().add('q8'),
        '8': new Set().add('q8'),
        '9': new Set().add('q8'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q8: {
        '0': new Set().add('q8'),
        '1': new Set().add('q8'),
        '2': new Set().add('q8'),
        '3': new Set().add('q8'),
        '4': new Set().add('q8'),
        '5': new Set().add('q8'),
        '6': new Set().add('q8'),
        '7': new Set().add('q8'),
        '8': new Set().add('q8'),
        '9': new Set().add('q8'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set().add('q9'),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set().add('q9'),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q9: {
        '0': new Set().add('q10'),
        '1': new Set().add('q10'),
        '2': new Set().add('q10'),
        '3': new Set().add('q10'),
        '4': new Set().add('q10'),
        '5': new Set().add('q10'),
        '6': new Set().add('q10'),
        '7': new Set().add('q10'),
        '8': new Set().add('q10'),
        '9': new Set().add('q10'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        'e': new Set(),
        'E': new Set(),
        '+': new Set().add('q11'),
        '-': new Set().add('q11'),
        '.': new Set()
    },
    q10: {
        '0': new Set().add('q10'),
        '1': new Set().add('q10'),
        '2': new Set().add('q10'),
        '3': new Set().add('q10'),
        '4': new Set().add('q10'),
        '5': new Set().add('q10'),
        '6': new Set().add('q10'),
        '7': new Set().add('q10'),
        '8': new Set().add('q10'),
        '9': new Set().add('q10'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        'e': new Set(),
        'E': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    },
    q11: {
        '0': new Set().add('q10'),
        '1': new Set().add('q10'),
        '2': new Set().add('q10'),
        '3': new Set().add('q10'),
        '4': new Set().add('q10'),
        '5': new Set().add('q10'),
        '6': new Set().add('q10'),
        '7': new Set().add('q10'),
        '8': new Set().add('q10'),
        '9': new Set().add('q10'),
        'a': new Set(),
        'b': new Set(),
        'c': new Set(),
        'd': new Set(),
        'e': new Set(),
        'f': new Set(),
        'A': new Set(),
        'B': new Set(),
        'C': new Set(),
        'D': new Set(),
        'E': new Set(),
        'F': new Set(),
        'x': new Set(),
        'X': new Set(),
        'e': new Set(),
        'E': new Set(),
        '+': new Set(),
        '-': new Set(),
        '.': new Set()
    }
}