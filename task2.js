function highlightKeywords(strings, ...keys) {
    const keywords = keys.map(keyword => `<span class='highlight'>${keyword}</span>`);
    let result = '';
  
    strings.forEach((string, i) => {
        result += string;
        if (i < keywords.length) {
        result += keywords[i];
        }
    });
  
    return result;
}
  
const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";
  
const highlighted = highlightKeywords`Learn ${keywords[0]} tagged templates to create custom ${keywords[1]} literals for ${keywords[2]} manipulation.`;
  
console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."