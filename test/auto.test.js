const { get } = require('axios');
require('should');
const headers = {'Content-Type': 'application/json'};
const cases = [
    {x: 4.8, xs: 1074.84},
    {x: 0, xs: 15},
    {x: 10, xs: 4095},
    {x: -3, xs: 195},
    {x: -2.7, xs: 147.84000000000003}
];

cases.forEach(({x, xs}) =>
    describe(xs + ' asyncAdd()', () => 
        it ('respond', async () => {
        const URL1 = `http://kodaktor.ru/api2/there/${x}`
        const{data: a} = await get(URL1, {headers});
        const URL2 = `http://kodaktor.ru/api2/andba/${a}`
        const{data: b} = await get(URL2, {headers});
        a.should.equal(xs);
        b.should.equal(x);
})
)
);
