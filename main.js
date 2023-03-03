
//database of the countries
var countries =[{name:"Libya",capital:"Tripoli"},{name:"Lebanon",capital:"Beirut"},{name:"Iraq",capital:"Baghdad"},{name:"Iran",capital:"Tehran"},{name:"Hungary",capital:"Budapest"},{name:"Greece",capital:"Athens"},{name:"Gabon",capital:"Libreville"},{name:"Cuba",capital:"Havana"},{name:"China",capital:"Beijing"},{name:"Canada",capital:"Ottawa"},{name:"Burkina Faso",capital:"Ouagadougou"},{name:"Bulgaria",capital:"Sofia"},{name:"Brazil",capital:"Brasilia"},{name:"Bosnia and Herzegovina",capital:"Sarajevo"},{name:"Belgium",capital:"Brussels"},{name:"Austria",capital:"Vienna"},{name:"Australia",capital:"Canberra"},{name:"Argentina",capital:"Buenos Aires"},{name:"Andorra",capital:"Andorra la Vella"},{name:"Afghanistan",capital:"Kabul"},{name:"Saudi Arabia",capital:"Riadh"},{name:"Senegal",capital:"Dakar"},{name:"Morroco",capital:"Rabat"},{name:"Algeria",capital:"Alger"},{name:"Portugal",capital:"Lisbon"},{name:"Spain",capital:"Madrid"},{name:"Germany",capital:"Berlin"},{name:"Italy",capital:"Rome"},{name:"France",capital:"Paris"},{name : "Croatia",capital : "Zagreb"},{name : "Thailand",population : "69M",capital : "Bangkok"},{name : "Finland",population : "5M",capital : "Helsinki"},{name : "Kenya",population : "53M",capital : "Nairobi"},{name : "Japan",population : "80M",capital : "Tokyo"},{name : "Azerbaijan",population : "10M",capital : "Baku"},{name : "Ivory Coast",population : "27M",capital : "Yamoussoukro"},{name :"USA",population : "332M",capital : "Washington"},{name:"Tunisia",population:"12M",capital:"Tunis"},{name: "Egypt",population:"120M",capital: "Cairo"}];
//function to add new counties to the database
var addCountry = function(name,population,capital){
var obj= {
name:name,
population:population,
capital:capital
}
countries.push(obj)
return countries
};
//function to generate a random capital name and saves the name of the country in a var
var result1 = ""
var result3 = ""
var generateRandomCountrie=function(){
   
    var random = Math.floor(Math.random()*countries.length);
    result1 =  result1 + countries[random].capital
    result3= result3 + countries[random].name
    $("#capital").html(result1)
    return result1
};

//to call the function when the page is loaded
$("body").onload=(generateRandomCountrie())
//to compare the input to the name associated with the capital
var result2 = $('#country').val()
var compare=function(){   
    if($('#country').val()===result3){
        console.log($('#country').val())
       $("#congrats").html("Congratulations!!!")
    }
    else{
        $("#congrats").html("Wrong answer try again!!!")

    } 
}
//to refresh the page and refresh the page
function tryAgain(){
    
    location.reload()
  }