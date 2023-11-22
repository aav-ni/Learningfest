function emi(){
    var amount= parseInt( document.getElementById('amount').value)
    var rate=parseInt(document.getElementById('interest').value)
    var time=parseInt(document.getElementById('duration').value)
     
    var interest=(amount * (rate * 0.01)) / time
    var EMI = (amount / time + interest).toFixed(2);
    document.getElementById('emi').innerHTML= 'The EMI is '+EMI
}