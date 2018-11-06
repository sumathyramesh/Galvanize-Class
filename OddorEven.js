function isOdd(n)
 {
     if (n%2 == 1) return true
     else return false
 }

 console.log(isOdd(5))
 console.log(isOdd(4))

 function factorialize(num) {
     fact = 1 
    for (i = 1; i<=num; i++)
      fact = fact*i
      //console.log(fact)
     return fact
 }

 console.log(factorialize(3))

 function hasDuplicate(name)
 {
    len = name.length;
     for (i=0; i<len; i++)
       {
        ptr = i+1;
        if (name[i] === name[ptr]) return true
        ptr = ptr + 1
       }

       return false
 }

 console.log(hasDuplicate("sele"))
 console.log(hasDuplicate("vinh"))

for(i=1; i<=100;i++){
    if ( i%3 == 0 && i%5 == 0) console.log("FizzBuzz")
    else
    if ( i%3 == 0) console.log("Fizz")
    else
    if ( i%5 == 0) console.log("Buzz")
    else console.log(i)
}






class MathClass
{
    constructor() {
        numbers = [3,6,4,1,3,3,9,9,1,1]
    }

    mean() {
        sum = 0;
        for (i=0; i<=9; i++)
         {
             sum = sum + numbers[i]
         }
         console.log(sum)
        
    }

}

console.log(MathClass.mean)