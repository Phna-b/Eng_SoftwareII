const {sum} = require('./unit_testing')

it('sums 2 numbers', ()=>{
    expect(sum(1,2).toBe(4))
})