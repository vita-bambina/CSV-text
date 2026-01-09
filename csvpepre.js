function tocsvtext (array){
    return array.map(row => row.join(',')).join('\n');

}
console.log(tocsvtext ([[ 0, 1, 2, 3, 4 ]]));
console.log(tocsvtext ([[ 0, 1, 2, 3, 4 ],[ 10,11,12,13,14 ]]));
console.log(tocsvtext ([[ 0, 1, 2, 3, 4 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ]]));
