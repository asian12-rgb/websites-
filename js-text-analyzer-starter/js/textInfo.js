let textareaEl = document.querySelector("#text");
let text = null;
let data = {
    words: 0,
    sentences: 0,
    UPPERCASE: 0,
    lowercase: 0,
    Space: 0,
    Digits: 0,
    vovls: 0,
    consonants: 0,
};

const setText = () => {
    text = textareaEl.value;
    // UPPERCASE(text.match(/[A-Z]/g).length);
    // lowercase(text.match(/[a-z]/g).length);
    // Space(text.match(/\s/g).length);
    // Digits(text.match(/\d/g).length);
    // vovls(text.match(/[aeiou]/gi.length));
    // consonants(text.match(/[BCDFGHJKLMNPQRSTVWXZY.]/gi.length));
    // sentences(text.match(/\056/gi.length));
    // words(text.match(/[a-zA-Z]+/gi.length));

    const findLength = (item) => (item === null ? 0 : item.length);
    if(text != null) {
        data.sentences = findLength(text.match(/\056/gi));
        data.words = findLength(text.match(/[a-zA-Z]+/gi));
        data.UPPERCASE = findLength(text.match(/[A-Z]/g));
        data.lowercase = findLength(text.match(/[a-z]/g));
        data.Space = findLength(text.match(/\s/g));
        data.Digits = findLength(text.match(/\d/g));
        data.vovls = findLength(text.match(/[aeiou]/gi));
        data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwzyz]/gi));
    }
    localStorage.setItem("data", JSON.stringify(data));
    window.location = "info.html";
};

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
    let data = getData();
    let htmlContent = "";

    for(item in data){
        htmlContent+= `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
        </div>`;

    }
    document.querySelector(".info-wrapper").innerHTML = htmlContent;
}