

function test(num: number): any{
    if (num % 2 === 0){
        return "candy";
    } else if (num % 11 === 0){
        return "bar";
    }else  if(num % 22 == 0){
        return "candybar";
    } else{
        return num;
    }
}
test(654)