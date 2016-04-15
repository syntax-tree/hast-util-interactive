// Dependencies:
var interactive = require('./index.js');

// Checks:
var a = interactive({
    'type': 'element',
    'tagName': 'a',
    'properties': {},
    'children': []
});

var b = interactive({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#alpha'
    },
    'children': []
});


var c = interactive({
    'type': 'element',
    'tagName': 'video',
    'properties': {
        'controls': true
    },
    'children': []
});

// Yields:
console.log('txt', ['a: ' + a, 'b: ' + b, 'c: ' + c].join('\n'));
