let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;



assert.equal(hello('Test'), 'Привет, Test');
//TODO: Кейсы для функции filter
assert.equal(filter('КЕК'), '***');
assert.equal(filter('NNКЕК КЕК'), 'NN*** ***');
assert.equal(filter('КЕК КЕК'), '*** ***');
assert.equal(filter('Я считаю, что вы все КЕК, и смеюсь над вами'), 'Я считаю, что вы все ***, и смеюсь над вами');
assert.equal(filter('КЕКАЛ КЕКА ЧЕРЕЗ КЕКУ ВИДИТ КЕКА В КЕКЕ КЕК'), '***АЛ ***А ЧЕРЕЗ ***У ВИДИТ ***А В ***Е ***');
