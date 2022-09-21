$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

const urls = {
    ECE: 'https://cde.nus.edu.sg/ece/',
    DIPTI: "https://www.ece.nus.edu.sg/gems/profhome.html",
    GEMS: "https://www.ece.nus.edu.sg/gems/",
    NUS: "https://www.nus.edu.sg/",
    HUST: "http://english.hust.edu.cn/",
    AIA: "http://english.aia.hust.edu.cn/",
    STANFORD: "https://www.stanford.edu/",
    GOOGLE_SCHOLAR: "https://scholar.google.com/citations?user=aanT6TIAAAAJ&hl=en&oi=ao",
    RESEARCH_GATE: "https://www.researchgate.net/profile/Wenjie-Zhang-10",
    THESIS: "https://scholarbank.nus.edu.sg/handle/10635/166266",
    GRAB: "https://www.grab.com/sg/"
  };
// const yaml = require('js-yaml');
// const fs = require('fs');
// const urls = yaml.load(fs.readFileSync("_data/venues.yml", 'utf8'));
// const urls2 = yaml.load(fs.readFileSync("_data/coauthors.yml", 'utf8'));
// for (const [key, value] of Object.entries(urls2)) {
//     urls[key] = value[0];
//   }
// console.log(urls);
function showWindow(name) {
    url = urls[name];
    window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
}