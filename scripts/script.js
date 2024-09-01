window.onload = function() {
console.log('hello holly');
    var terms = [
        'Palm Kernel',
        'Palm Kernel Oil',
        'Palm oils',
        'ever'
    ];
    const content = window.document.body.innerText;
    const check =  content.search('publishing') != '-1';
    console.log('content', content , 'check' , check);
}