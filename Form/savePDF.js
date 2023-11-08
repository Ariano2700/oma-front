     // Función para imprimir la página
     document.getElementById("printButton").addEventListener("click", function () {
        window.print();
    });

function save_pdf(){
    let element = document.getElementById('to_pdf_container');

    // easy
    //html2pdf().from(element).save();

    // con nombre de archivo definido por el usuario
    //let filename = 'custom.pdf';
    //html2pdf().from(element).save(filename);

    //con opciones mas avanzadas
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}