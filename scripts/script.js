window.onload = function() {
console.log('hello holly');
    var terms = [
        'Palm Kernel',
        'Palm Kernel Oil',
        'Palm oils',
        'Palm Kernel', 
        'Palm Kernel Oil', 
        'Palm Fruit Oil', 
        'Palmate', 
        'Palmitate', 
        'Palm olein', 
        'Glyceryl', 
        'Stearate', 
        'Stearic Acid', 
        'Elaeis Guineensis', 
        'Palmitic Acid', 
        'Palm Stearine', 
        'Palmitoyl Oxostearamide', 
        'Palmitoyl Tetrapeptide-3', 
        'Sodium Laureth Sulfate', 
        'Sodium Lauryl Sulfate', 
        'Sodium Kernelate', 
        'Sodium Palm Kernelate', 
        'Sodium Lauryl Lactylate/Sulphate', 
        'Hydrated Palm Glycerides', 
        'Etyl Palmitate', 
        'Octyl Palmitate', 
        'Palmityl Alcohol', 
        'Laureth-7, Steareth-2', 
        'Cocamide MEA (fatty acid-derived)',
        'Cocamiede DEA (fatty acid derived)', 'Stearamidopropyldimethylamine', 
        'Cetyltrimethylammonium chloride', 
        'Isopropylmyristate', 
        'Caprylic/capric Trigylceride', 
        'Fatty Isethionates (SCI)',  
        'Alkylpolyglycoside (APG)', 
        'Laurylamine oxide',
        'ever',
        'info',
        'Palm oil'
    ];
    const content = window.document.body.innerText;
        // Expected output: Defines which content to search aka InnerText of window, document, body
    const check =  content.match('ever');
    // Expected output: ? 
    terms.forEach ((term) => 
        console.log(term, content.match(term)),);
    // Expected output: Print out a match and which term

    // Expected output: For each term found it will console log everything that happened before
    console.log('content', content , 'check' , check);
}


