var inputText = document.querySelector("#input-txt");
var translateButton = document.querySelector("#btn-translate");
var outputtext = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/doge.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text

}
//console.log(getTranslationURL("I am richa"));
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var textInput = inputText.value;


    fetch(getTranslationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputtext.innerText = translatedText;
        })
        .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler);