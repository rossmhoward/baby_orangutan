(function(){
    //Bunch of code...
    console.log('hello holly');
    var terms = [
        'Palm Kernel',
        'Palm Kernel Oil',
        'Palm oils',
        'ever'
    ];
    const check = 
    window.document.documentElement.innerText.search('publishing') != '-1';
    console.log(`here is an array of terms for you to start searching for: ${check}, [${terms}].`);
    console.log(window,window.document, window.document.documentElement);
})();