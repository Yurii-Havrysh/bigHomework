function highlightKeywords(strings, ...keywords) {
    const regex = new RegExp(keywords.join("|"), "gi");

    const highlightedStrings = strings.map((string) => {
        return string.replace(regex, (match) => {
            return `<span class='highlight'>${match}</span>`;
        });
    });

    return highlightedStrings.join("");
}

const keywords = ["JavaScript", "template", "tagged"];
const template = `Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.`;

const highlighted = highlightKeywords(template, ...keywords);

console.log(highlighted);