const translations = {  
	en: {  
	greet: "Hello",  
	intro: "Welcome to our website"  
},  
	fr: {  
	greet: "Bonjour",  
	intro: "Bienvenue sur notre site web"  
}  
};  
	  
const language = "fr"; // Change to "en" for English  

function localize(strings, ...phrases) {
    const translation = translations[language];
    const result = [];

    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i]);
        if (i < phrases.length) {
            const value = phrases[i];
            if (translation[value]) {
                result.push(translation[value]);
            } else {
                result.push(value);
            }
        }
    }

    return result.join('')
}

const greeting = "greet";  
const introduction = "intro";  

const localizedGreeting = localize`${greeting}`;  
const localizedIntroduction = localize`${introduction}`;  
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")