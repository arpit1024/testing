
const {matSum} = require("./matrixSum");

var matrix1 =[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
var matrix2 =[[1,2,3],[4,-5,-6],[7,8,9],[-10,-11,-12]]
var matrix3 =[[1,2,3]]
var matrix4 =[[1,1,1],[1,1,1],[1,1,1],[1,1,1]]
var matrix5 =[[100]]
var matrix6 =[[1,-2,1],[-2,-2,4],[-2,-1,4],[-10,11,-1]]
var matrix7 =[[0,0,0],[1,0,-1]]
var matrix8 =[[-1,-2,-3],[-4,-5,-6],[-7,-8,-9],[-10,-11,-12]]

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
    test('adding the elements of matrix1', ()=>{
        Expect(matSum(matrix1)).Tobe(78);
    })
    test('adding the elements of matrix2', ()=>{
        Expect(matSum(matrix2)).Tobe(-10);
    })
    test('adding the elements of matrix3', ()=>{
        Expect(matSum(matrix3)).Tobe(6);
    })
    test('adding the elements of matrix4', ()=>{
        Expect(matSum(matrix4)).Tobe(12);
    })
    test('adding the elements of matrix5', ()=>{
        Expect(matSum(matrix5)).Tobe(100);
    })
    test('adding the elements of matrix7', ()=>{
        Expect(matSum(matrix7)).Tobe(0);
    })
    test('adding the elements of matrix6', ()=>{
        Expect(matSum(matrix6)).Tobe(0);
    })
    test('adding the elements of matrix8', ()=>{
        Expect(matSum(matrix8)).Tobe(78);
    })
    
    
    