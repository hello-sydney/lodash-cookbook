const should = require('should');
const assign = require('../../api/object/assign');

describe('_.assign', () => {
    it('正常', () => {
        let a = { x: 1 };
        let b = { x: 2 };
        let res = assign(a, b);

        should(res).be.exactly(a);
        should(a.x).be.exactly(2);

        a = { x: 1, y: 1 };
        res = assign(a, b);

        should(a.y).be.exactly(1);
        should(b.y).be.exactly(undefined);

        a = { x: 1 };
        b = { x: 2, y: 1 };
        res = assign(a, b);

        should(a.y).be.exactly(1);
    });
});
