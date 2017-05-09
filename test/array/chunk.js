const should = require('should');
const toString = require('../common/toString');
const chunk = require('../../api/array/chunk');

describe('_.chunk', () => {
    it('正常', () => {
        let list = [1, 2, 3, 4];
        let size = 2;
        let res = chunk(list, size);

        should(toString(list)).be.exactly('[1,2,3,4]');
        should(toString(res)).be.exactly('[[1,2],[3,4]]');
    });
});
