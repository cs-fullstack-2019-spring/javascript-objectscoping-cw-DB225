//Create an array called peopleList objects using Object Literal notation.
//
// Each 'person' object in the 'people' collection should have the following information:
//
// First Name Last Name Age Zip Code
var listPeople =
    [{
        FirstName: "Jimmy",
        Lastname: "Page",
        Age: 62,
        ZipCode: 00821,
         },
        {
            FirstName: "Rick",
            Lastname: "Nielsen",
            Age: 57,
            ZipCode: 61016,
        },
        {
            FirstName: "Jimmy",
            Lastname: "Hendrix",
            Age: 58,
            ZipCode: 90001,
        },
        {
        FirstName: "Lemmy",
        Lastname: "Kilmister",
        Age:57,
        ZipCode:21120,
    }];
console.log(listPeople);
//Dynamically add the property famousSong to the object instance for Jimi Hendrix and assign it the value Purple Haze
listPeople[2].famousSong = "purple Haze";

//Dynamically add a function called getBandandZip() to the object instance for Jimmy Page that returns a concatenated string of Led Zeppelin HISZIPCODE (get zip code from the object instance).
// Call the function from your code and log the response.
listPeople[0].getBandandZip = function (){
    return("Led Zeppelin" + this.ZipCode);
};

//Write a function that accepts a zip code parameter and prints out all the people in the array with a matching zip code,
// or print the message No match found for zip code! if there is no match.
function findZip(){
    var verfyZip = parseInt(prompt("enter your zip code"));

    if(verfyZip === 00821){
        console.log("Jimmy Page");
    }
    else if(verfyZip === 61016){
        console.log("Rick Nielsen");
    }
    else if(verfyZip === 90001){
        console.log("Jimmy Hendrix");
    }
    else if(verfyZip === 21120){
        console.log("Lemmy Kilmister");
    }
    else{
        console.log("NO MATCH FOUND");
    }
}
findZip();







