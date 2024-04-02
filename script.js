let datos;

async function verInfo(){
    try{
        const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

        if(respuesta.status==200){
            datos = await respuesta.json();
            console.log(datos);
            document.getElementById("img1").src=datos.drinks[0].strDrinkThumb;
            document.getElementById("nom1").innerHTML=datos.drinks[0].strDrinstructions;

            document.getElementById("img2").src=datos.drinks[1].strDrinkThumb;
            document.getElementById("nom2").innerHTML=datos.drinks[1].strDrinstructions;
        }        
    }
    catch(error){
        console.log(error);
    }
}