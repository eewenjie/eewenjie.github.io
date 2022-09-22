$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// const fs = require('fs');
// const urls = jsyaml.load(fs.readFileSync("_data/venues.yml", 'utf8'));
// const urls2 = jsyaml.load(fs.readFileSync("_data/coauthors.yml", 'utf8'));
// for (const [key, value] of Object.entries(urls2)) {
//     urls[key] = value[0];
//   }
// console.log(urls);
function readYAML( url )
{
     var result = null;
     $.ajax({
        url: url,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = jsyaml.load( data );
        } 
     });
     return result;
}
const urls = readYAML('https://raw.githubusercontent.com/eewenjie/eewenjie.github.io/master/_data/venues.yml');
const urls2 = readYAML('https://raw.githubusercontent.com/eewenjie/eewenjie.github.io/master/_data/coauthors.yml');
for (const [key, value] of Object.entries(urls2)) {
    urls[key] = value[0];
}
console.log(urls);
console.log("Hello, world!");
function showWindow(name) {
    url = urls[name].url;
    window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
}