let map = {
    symbols: {},
    uCL: {},
    lCl: {},
    numbers:{}
}
let symbols= `(!@#$%^&*(),.<>/';:"][{}\|? )`
let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '0123456789'

for(let i =0; i<26; i++)
{
    map.uCL[upperCaseLetters[i]] = 1;
    map.lCl[lowerCaseLetters[i]] = 1;
    map.symbols[symbols[i]] = 1;
}
for(let i =26; i<29; i++)
{
    map.symbols[symbols[i]] = 1;
}
for(let i =0; i<10; i++)
{
    map.numbers[numbers[i]] = 1;
}
function check(pass)
{
    if(pass.length <6)
    {
        return 'length should be more than 6 characters'
    }
    let isULPres = false, isLLPres = false ,isSymPres = false ,isNumPres = false;

    for(let i =0; i<pass.length; i++)
    {
        if(map.uCL[pass[i]] != undefined)
        {
             isULPres = true;
        }
        if(map.lCl[pass[i]] != undefined)
        {
             isLLPres = true;
        }
        if(map.symbols[pass[i]] != undefined)
        {
             isSymPres = true;
        }
        if(map.numbers[pass[i]] != undefined)
        {
            isNumPres = true;
        }
    }
    if(isSymPres == true && isULPres == true && isLLPres == true && isNumPres ==true)
    {
       return 'valid';
    }else if(isSymPres == true && isULPres == true&& isNumPres ==true){
        return 'lower case letter is missing';
    }else if(isSymPres == true && isLLPres == true&& isNumPres ==true){
        return 'Upper Case letter is missing'
    }else if(isULPres == true && isLLPres == true&& isNumPres ==true){
        return 'symbol is missing'
    }else if(isSymPres == true && isULPres == true && isLLPres == true)
    {
        return 'number is missing'
    }else{
        return 'not valid'
    }
}
module.exports = {check}