/*const a = document.getElementById("PEI");
a.textContent = "Ver el Documento PEI";
a.style.color = "blue";

/*const boton = document.querySelector('.PEI');//si estuviera dentro de un div (documento) entonces ('.btn .btn-primary')

boton.addEventListener('click', ()=>{
    console.log("Hiciste Click");
    
    const descargarA = document.createElement("a");
    descargarA.href = "Recursos/Archivos/PEI IPET 379-2023.pdf";
    descargarA.target = "_blank";
    document.body.appendChild(descargarA);
    descargarA.textContent="descargando";
    document.body.removeChild(descargarA);
    
})*/
document.getElementById("btnAbrirPDF").addEventListener("click", function() {
    window.open("PEI_IPET379-2023.pdf", "_blank", "download");
});