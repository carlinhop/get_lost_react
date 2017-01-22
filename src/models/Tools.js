class Tools{

     static xmlHttp(url){

         //This is how you have to use xmlHttp:
         //Tools.xmlHttp("https://restcountries.eu/rest/v1/all")
         // .then((results)=>{console.log(results)},(results)=>{console.log(results)})

         let promise = new Promise((resolve, reject) => {

             let request = new XMLHttpRequest();

             request.open("GET", url);

             request.onload = function() {

                 if (request.status == 200) {
                     resolve(JSON.parse(request.response));
                 }
                 else {
                     reject(Error("problem"));
                 }
             }
             request.send();
         })

        return promise;
     }


     static getRandomCity(countries){
         let randomNumber = parseInt(Math.random() * (countries.length - 1) + 1);

         let randomCity = {
             name: countries[randomNumber].capital,
             coordinates: countries[randomNumber].latlng,
             language: countries[randomNumber].languages,
             country: countries[randomNumber].name,
             currency: countries[randomNumber].currencies
         }
       return randomCity;
     }
}
export default Tools;