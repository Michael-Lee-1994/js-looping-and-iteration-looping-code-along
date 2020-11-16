// Code your solutions in this file
function writeCards(a,b) {
    let temp = []
    for(let i = 0; i < a.length; i++) {
        temp.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`)
    }
    return temp;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
}