function multiline(strings, ...values) {
    const result = strings.reduce((acc, str, i) => {
        acc += str;
        if (values[i] !== undefined) {
            acc += values[i];
      }
        return acc;
    }, '');
  
    const lines = result.split('\n');
  
    const formattedLines = lines.map((line, index) => {
        return `${index + 1} ${line}`;
    });
  
        return formattedLines.join('\n');
}
  
const code = multiline
`function add(a, b) {
return a + b;
}`; 
console.log(code);