function highlightKeywords(strings, ...keywords) {
    return strings.reduce((result, string, i) => {
      result += string;
      if (i < keywords.length) {
        result += `<span class='highlight'>${keywords[i]}</span>`;
      }
      return result;
    }, '');
  }
  
  const keywords = ["JavaScript", "template", "tagged"];
  const template = (strings, ...values) => {
    let result = '';
    strings.forEach((str, i) => {
      result += str + (values[i] || '');
    });
    return result;
  };
  
  const highlighted = highlightKeywords(template`${0} tagged templates to create custom ${1} literals for ${2} manipulation.`, keywords);
  
  console.log(highlighted);
  // Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."