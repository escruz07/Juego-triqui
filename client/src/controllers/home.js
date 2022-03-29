function validateRowWinner(position, grid, player){
    let array=[];
    for(let i=0; i < 3; i++){
        array.push(grid[position][i])
    }
    return array.every(elem => elem === player);
}

function validateColumnWinner(position, grid, player){
    let array=[];

    for(let i=0; i < 3; i++){
        array.push(grid[i][position])
    }

    return array.every(elem => elem === player);
}

function validateIdentical(grid, player){
    let array=[];

    for(let i=0; i < 3; i++){
        array.push(grid[i][i])
    }

    return array.every(elem => elem === player);
}

function validateDiagonal(grid, player){
    let i=0;
    let j=3-1;
    let array=[];
    
    for(let k=0; i < 3; k++){
        array.push(grid[i][j]);
        i++;
        j--;
    }

    return array.every(elem => elem === player);
}

export {
    validateColumnWinner,
    validateRowWinner,
    validateDiagonal,
    validateIdentical
}