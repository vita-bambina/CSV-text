# CSV-text
Question: Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'


**Method**: I created a function that takes an array as its parameter and uses the expression array.map(row => row.join(',')).join('\n'). Here, array.map() goes through each element of the array and returns a new array with the results. Since the array is a 2D array, each element (row) is itself an inner array. The row.join(',') method converts each inner array into a string, with its elements separated by commas. Finally, .join('\n') combines all these strings into a single string, placing each inner array on a new line.
