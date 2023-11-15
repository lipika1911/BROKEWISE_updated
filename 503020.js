function calculate(){
    let income=document.getElementById('income');
    console.log(income.value);
    let n=((income.value*50)/100).toFixed(2);
    console.log(n);
    let w=((income.value*30)/100).toFixed(2);
    console.log(w);
    let s=((income.value*20)/100).toFixed(2);
    console.log(s);
    document.getElementById('n').innerHTML=n;
    document.getElementById('w').innerHTML=w;
    document.getElementById('s').innerHTML=s;

}