function convert(){
    const val = Number(document.getElementById('val').value)
    const fah = 9/5 * val +32;
    document.getElementById('result').innerHTML=`${val}°C is equal to ${fah}°F`;
}