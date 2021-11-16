const {check} = require('./checkPassword')

function test(str, fn)
{
    console.log(str);
    fn();
}

function Expect(value)
{
    function Tobe(result)
    {
        if(value == result)
        {
            console.log('Accepted');
        }else
        {
            console.log(`Expected: ${result}, Received: ${value}`);
        }
    }
    return {Tobe}
}
test('checking a password with missing UpperCase Letter: ',()=>{
   Expect(check('hello@21')).Tobe('Upper Case letter is missing')
})
test('checking a password with missing number: ',()=>
{
    Expect(check('Hello#')).Tobe('number is missing')
})
test('checking a password with missing symbol: ',()=>
{
    Expect(check('Hello123')).Tobe('symbol is missing')
})
test('checking a password with less than 6 characters: ',()=>
{
    Expect(check('Hl#23')).Tobe('length should be more than 6 characters')
})
test('checking a password with missing lowerCase Letter: ',()=>
{
    Expect(check('HLAO#23')).Tobe('lower case letter is missing')
})
test('checking a password with only lowerCase Letter: ',()=>
{
    Expect(check('halosjd')).Tobe('not valid')
})
test('checking a password with only upperCase Letter: ',()=>
{
    Expect(check('HLAOSADS')).Tobe('not valid')
})
test('checking a password with only numbers: ',()=>
{
    Expect(check('23231156')).Tobe('not valid')
})
test('checking a password with only symbols: ',()=>
{
    Expect(check('*%*&#*(@*(&%')).Tobe('not valid')
})
test('checking a correct password: ',()=>
{
    Expect(check('Hello#23')).Tobe('valid')
})