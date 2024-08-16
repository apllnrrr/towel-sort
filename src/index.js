module.exports = function towelSort(matrix){
  if(matrix == undefined){
    return []
  } else {
  let result = []
  for(let i=0; i<matrix.length; i++){
    if(i===0 || i%2===0){
      for(let j=0; j< matrix[i].length; j++){
       result.push(matrix[i][j])
      }
    } 
    if(i!=0 && i%2!=0){ 
       let sec = []
       for(let y=matrix[i].length - 1; y>=0; y = y-1){
        sec.push(matrix[i][y])
       }
       for(let j=0; j<sec.length; j++){
        result.push(sec[j])
       }
  }
 } 
 return result
}
}
