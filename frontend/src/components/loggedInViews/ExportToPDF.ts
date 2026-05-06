import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPDF = async () => {
    //Hämtar HTML-element id från healthlog, om element inte finns avbryt
    const input = document.getElementById("healthlog-content");
    if (!input) return;

    //Hämtar element som inte ska med PDF (ikon för redigering + papperskorg) och döljer 
    const hideElement = input.querySelectorAll<HTMLElement>(".no-print");
    try {
    hideElement.forEach(element => (element.style.visibility = "hidden"));

    //Gör om HTML till canvas -> scale 2 = högre upplösning
    const canvas = await html2canvas(input, {scale: 2});
    const imgData = canvas.toDataURL("image/png");

    //Skapar ny PDF p = stående, mm = milimeter, a4 = standard papper
    const pdf = new jsPDF("p", "mm", "a4");

    //Hämtar bredden för att skala rätt + räknar ut bildens höjd
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    //Lägger in bilden i PDF, sparar som healthlog.pdf
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    pdf.save("healthlog.pdf");

    } finally {
      hideElement.forEach(element => (element.style.visibility = "visible"));
    }
}

export default exportToPDF