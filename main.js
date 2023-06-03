let key='05b50b255f4046828858d53d7e45371d';
let pais='us';
let categoria = 'technology';
let url =`https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${key}`;
let mostrar_noticias= document.getElementById('noticias');

fetch(url).then((resp)=> resp.json()).then(dato =>{
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement('noticias');
        div.innerHTML=`<br>
                        <img stye= "max-width:800px" src=${numero.urlToImage}><br>
                        <h1>${numero.title}</h1>
                        <h2>${numero.description}</h2>
                        <h3><a href="${numero.url}">see more information</a></h3>`;
        
        mostrar_noticias.appendChild(div);
    
    })
  
});