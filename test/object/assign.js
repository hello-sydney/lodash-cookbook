const should = require('should');
const assign = require('../../api/object/assign');

describe('_.assign', () => {
    it('正常', () => {
        let a = { x: 1 };
        let b = { x: 2 };
        let res = assign(a, b).x;

        should(res).be.exactly(2);
        should(a.x).be.exactly(2);
    });
});
