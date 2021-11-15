function matSum(matrix){
     var sum = 0;
    for(let i =0; i<matrix.length; i++)
    {
        for(let j =0; j<matrix[0].length; j++)
        {
            sum += matrix[i][j]
        }
    } 
    return sum;
}
module.exports ={matSum}

