class Tools{

     static xmlHttp(url, action, data){
         //This is how you have to use xmlHttp:
         //Tools.xmlHttp("https://restcountries.eu/rest/v1/all")
         // .then((results)=>{console.log(results)},(error)=>{console.log(error)})

         let promise = new Promise((resolve, reject) => {

             let request = new XMLHttpRequest();
             request.open(action, url);

             request.onload = function() {
                 if(action ==="GET") {
                     if (request.status === 200) {
                         resolve(JSON.parse(request.response));

                     }
                     else {
                         reject(Error("problem"));
                     }
                 }
                 else{
                     resolve(request.response);
                 }

             };
             if(action === "POST"){
                 request.setRequestHeader('content-type', 'application/json');
                 request.send(JSON.stringify(data));
             }
             else{
                 request.send();
             }
         });

        return promise;
     }

     static getRandomNumber(elementsArray){
         let randomNumber = parseInt(Math.random() * (elementsArray.length - 1));
         return randomNumber;
     }


     static getRandomCity(countries){
         let randomNumber =  Tools.getRandomNumber(countries);
         let randomCityData = {
             name: countries[randomNumber].capital,
             coordinates: countries[randomNumber].latlng,
             language: countries[randomNumber].languages,
             country: countries[randomNumber].name,
             currency: countries[randomNumber].currencies
         };
       return randomCityData;
     }
}
export default Tools;