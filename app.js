var Textinput = document.querySelector("#txtinput");
var buttonTrans = document.querySelector("#btn-translate");
var result = document.querySelector("#output");

var minionsURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return minionsURL + "?" + "text=" + input
}
 
buttonTrans.addEventListener("click" , clickResponse)
function errorHandler(error){
    console.log("error occured",error)
    alert("something went wrong")
}

function clickResponse() {
    var inputText = Textinput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        result.innerText = translatedText ;
    })
    .catch(errorHandler)
} 

