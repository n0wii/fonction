//       Fonction
 
let n1="jean";
let n2="Paul";
let result=checkName(n1,n2)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);