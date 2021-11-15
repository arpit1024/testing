const { expect } = require("@jest/globals");
const {matSum} = require("./matrixSum");

var matrix1 =[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
var matrix2 =[[1,2,3],[4,-5,-6],[7,8,9],[-10,-11,-12]]
var matrix3 =[[1,2,3]]
var matrix4 =[[1,1,1],[1,1,1],[1,1,1],[1,1,1]]
var matrix5 =[[100]]
var matrix6 =[[1,-2,1],[-2,-2,4],[-2,-1,4],[-10,11,-1]]
var matrix7 =[[0,0,0],[1,0,-1]]
var matrix8 =[[-1,-2,-3],[-4,-5,-6],[-7,-8,-9],[-10,-11,-12]]

    test('adding the elements of matrix1', ()=>{
        expect(matSum(matrix1)).toBe(78);
    })
    test('adding the elements of matrix2', ()=>{
        expect(matSum(matrix2)).toBe(-10);
    })
    test('adding the elements of matrix3', ()=>{
        expect(matSum(matrix3)).toBe(6);
    })
    test('adding the elements of matrix4', ()=>{
        expect(matSum(matrix4)).toBe(12);
    })
    test('adding the elements of matrix5', ()=>{
        expect(matSum(matrix5)).toBe(100);
    })
    test('adding the elements of matrix7', ()=>{
        expect(matSum(matrix7)).toBe(0);
    })
    test('adding the elements of matrix6', ()=>{
        expect(matSum(matrix6)).not.toBe(0);
    })
    test('adding the elements of matrix8', ()=>{
        expect(matSum(matrix8)).not.toBe(78);
    })
    
    
    