function checker(){
    let str = document.getElementById('val').value;
    let str1 = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(str1);
    let str2 = str1.split('').reverse().join('')
    console.log(str2);
    let msg=' ';

    if(str2==str1){
        msg=`${str} is a Palindrome`
    }else{
        msg=`${str} is not a Palindrome`
    }
    let result = document.querySelector('#result');
    result.innerHTML= msg;
}