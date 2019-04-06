var words = document.getElementById("words");
words.addEventListener("input", change_href);

function change_href() {
    document.getElementById("link").href = "https://translate.google.com/#en/id/" + words.value;
}
