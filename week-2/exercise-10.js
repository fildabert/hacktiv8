function numberComparison(num1, num2){
    if(num1 < num2){
        return true
    
    }else if(num1 > num2){
        return false
    
    }else if(num1 == num2){
        return -1
    }

}

console.log(numberComparison(2, 4))
console.log(numberComparison(4, 2))
console.log(numberComparison(5, 5))
console.log(numberComparison(3, 3))