const fs = require('fs');

function decode(message_file) {
    const fileContents = fs.readFileSync(message_file, 'utf8');
    
    const lines = fileContents.split('\n');

    lines.sort();

    const words = lines.map(item => {
        return item.split(' ').pop()
    });

    var pyramid = [ [] ];

    pyramidRowIndex = 0;
    rowSize = 1;

    for (let i = 0; i <= words.length; i++) {
        let word = words[i];
        let pyramidRow = pyramid[pyramidRowIndex];
        
        pyramidRow.push(word);

        if (pyramidRow.length == rowSize) {
            pyramid.push([]);
            pyramidRowIndex += 1;
            rowSize += 1
        };
    };

    const lastWords = pyramid.map(item => item.pop());
    return lastWords.join(' ')
};


var file = './encoded_message.txt';
console.log(decode(file));

file = './another_message.txt';
console.log(decode(file));

file = './yet_another_message.txt';
console.log(decode(file));

file = './coding_qual_input.txt';
console.log(decode(file));

file = './coding_qual.txt'
console.log('FINAL - ', decode(file));

decode(file);