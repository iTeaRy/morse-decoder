const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function dotOrDash(symbol) {
    switch(symbol) {
        case '10':  return '.';
        case '11':  return '-';
        default: return '';
    }
}

function wordDecoder(word) {
    var letters = [];
    var index = 0;
    var morseLetter = '';
    const lettersCount = word.length;
    while (index < lettersCount) {
        morseLetter = morseLetter + dotOrDash(word.substr(index, 2));
        index = index + 2;
        if (index % 10 === 0) {
            letters.push(MORSE_TABLE[morseLetter]);
            morseLetter = '';
        }
    }
    var result = '';
    letters.forEach(function(letter) {
        result = result + letter;
    });
    return result;
}

function decode(expr) {
    const separator = '**********';
    const words = expr.split(separator);
    var result = '';
    const wordsCount = words && words.length;
    if (wordsCount > 1) {
        words.forEach(function(word, index) {
            if (wordsCount === index + 1) {
                result = result + wordDecoder(word);
            } else {
                result = result + wordDecoder(word) + ' ';
            }
        });
    } else {
        result = wordDecoder(words[0]);
    }
    return result;
}

module.exports = {
    decode
}