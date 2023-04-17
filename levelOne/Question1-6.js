function printHello() {
    console.log('Hello World')
}

function secondLargestNumber(a, b, c, d){
    let firstLargeNumber = a
    let secondLargeNumber = null
    if (arguments <= 1){
        throw new Error('input must be greater than one value')
    }else{
        if (b > firstLargeNumber){
            secondLargeNumber = firstLargeNumber
            firstLargeNumber = b
        }else if (c > firstLargeNumber){
            secondLargeNumber = firstLargeNumber
            firstLargeNumber = c
        }else {
            secondLargeNumber = firstLargeNumber
            firstLargeNumber = d
        }

    }
    return secondLargeNumber



    // if (a > b && a > c && a > d){
    //     firstLargeNumber = a
    // }else if (b > a && b > c && b > d){
    //     firstLargeNumber = b
    // }else if (c > a && c > b && c > d){
    //     firstLargeNumber = c
    // }else {
    //     firstLargeNumber = d
    // }
    //
    // if (a < firstLargeNumber){
    //     secondLargeNumber = a
    // } else if (b < firstLargeNumber){
    //     secondLargeNumber = b
    // }else if (c < firstLargeNumber){
    //     secondLargeNumber = c
    // }else secondLargeNumber = d

}

function printInSeperateLine(){
    console.log(`SE`)
    console.log(`MI`)
    console.log(`CO`)
    console.log(`LO`)
    console.log(`N`)
}


function printInOneLine(){
    let my_word = 'VENTURES'
    for (let i = 0; i < my_word.length; i++) {
     console.log(my_word[i], my_word[i+1])
    }
}

function occurences(main_word, substring){
   let count = 0
    for (let i = 0; i < main_word.length; i++) {
        if (main_word[i] === substring){
            count++
        }
    }return count

}

function divisible(){
   let sum = 0
    for (let i = 1; i <= 30; i++) {
       if (i % 3 === 0){
           sum += i
       }
    }
}

function guessGame(date_of_birth){
    let myDate = 11
    while (date_of_birth !== myDate){
        if (date_of_birth === myDate){
            console.log('You Guessed Right')
        }else console.log('Incorrect Guess')
    }
}



