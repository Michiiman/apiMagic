const buscar=document.getElementById('btn-buscar');
const next=document.getElementById('btn-siguiente');
let link='';
//eventos
buscar.addEventListener('click', ()=>
{ link = llamarApi('https://api.scryfall.com/cards/search?q=*') })
next.addEventListener('click', ()=>
{ siguiente(link) })


//Funciones
function llamarApi(url){
    
    fetch (url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>{
            mostrarHtml(resultado.data);
            link=resultado.next_page;
            return link
        })
}

function mostrarHtml(resultado){
    const contenido=document.getElementById('cartas');
    console.log(resultado)
    for (const cartas of resultado){
        //Revisa si el contenido posee la propiedad
        if(cartas.hasOwnProperty('image_uris')){
            const img=document.createElement('div');
        img.innerHTML=`
        <img src=${cartas.image_uris.normal}>
        `
        contenido.appendChild(img);
        }
    };
    
}    

function siguiente(url){
    llamarApi(url);
}

