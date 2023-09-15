const encuentrame = () => {
    //todo o processo de localização

    const success = (position) => {

        const imgBlueTreeMorumbi = document.getElementById("morumbi");
        const imgBlueTreePaulista = document.getElementById("paulista");
        const imgIbis = document.getElementById("ibis");
        const imgRenaissance = document.getElementById("renaissance");
        const imgPamplona = document.getElementById("pamplona");
        const imgComfort = document.getElementById("confort");
        const imgSheraton = document.getElementById("sheraton");
        const imgTulip = document.getElementById("tulip");
        const imgBourbon = document.getElementById("bourbon");

        const mapaBlueTreeMorumbi = new Image();
        const mapaBlueTreePaulista = new Image();
        const mapaIbis = new Image();
        const mapaRenaissance = new Image();
        const mapaPamplona = new Image();
        const mapaComfort = new Image();
        const mapaSheraton = new Image();
        const mapaTulip = new Image();
        const mapaBourbon = new Image();
        
        mapaBlueTreeMorumbi.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.621973196670204,-46.696393669312364&size=400,300`;
        mapaBlueTreePaulista.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.560251144864623,-46.65632207671912&size=400,300`;
        mapaIbis.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.51609168266091,-46.62564131534383&size=400,300`;
        mapaRenaissance.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.558618577229737,-46.66214418465617&size=400,300`;
        mapaPamplona.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.568429261331122,-46.658185515343824&size=400,300`;
        mapaComfort.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.602776837407227,-46.6620313&size=400,300`;
        mapaSheraton.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.609040091762083,-46.69624219999999&size=400,300`;
        mapaTulip.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.571830298317792,-46.64633348465618&size=400,300`;
        mapaBourbon.src = `https://www.mapquestapi.com/staticmap/v5/map?key=HNSiTLM3aMNgvpVZYMoBRYLmNIkXXRWx&locations=-23.608977415020206,-46.66731184603148&size=400,300`;
        
        imgBlueTreeMorumbi.appendChild(mapaBlueTreeMorumbi); 
        imgBlueTreePaulista.appendChild(mapaBlueTreePaulista); 
        imgIbis.appendChild(mapaIbis); 
        imgRenaissance.appendChild(mapaRenaissance); 
        imgPamplona.appendChild(mapaPamplona); 
        imgComfort.appendChild(mapaComfort); 
        imgSheraton.appendChild(mapaSheraton); 
        imgTulip.appendChild(mapaTulip); 
        imgBourbon.appendChild(mapaBourbon);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };

    navigator.geolocation.getCurrentPosition( success , errorPosicion );
};

const verificarGeo = () => {
    if(!navigator.geolocation){
    //não suporta localização
    const divCoordenadas = document.getElementById("coordenadas");
    divCoordenadas.innerHTML ="<p>localização não suportada pelo navegador</>";
    return;
    }
 //Se suportar, chamar a localização
  encuentrame();
};

verificarGeo();