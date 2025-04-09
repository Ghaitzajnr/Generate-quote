import { templates, indonesianTemplates, englishQuotes, indonesianQuotes } from '../data/quote';

export const generateRandomQuote = (wordsArray) => {
  if (!wordsArray || wordsArray.length === 0) {
    return "Please provide some words to generate a quote";
  }

  // Determine language based on first word's characters
  const isIndonesian = /[à-üÀ-Ü]/.test(wordsArray[0]) || 
                      wordsArray.some(word => word.length > 8 && Math.random() > 0.7);

  if (Math.random() > 0.5) {
    // Use template
    const template = isIndonesian 
      ? indonesianTemplates[Math.floor(Math.random() * indonesianTemplates.length)]
      : templates[Math.floor(Math.random() * templates.length)];
    
    const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return template.replace('{word}', word);
  } else {
    // Generate random sentence
    const shuffled = [...wordsArray].sort(() => 0.5 - Math.random());
    const wordCount = Math.floor(Math.random() * 3) + 3;
    const selectedWords = shuffled.slice(0, Math.min(wordCount, shuffled.length));
    const sentence = selectedWords.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  }
};

export const getRandomPredefinedQuote = () => {
  const isIndonesian = Math.random() > 0.5;
  const quotes = isIndonesian ? indonesianQuotes : englishQuotes;
  return quotes[Math.floor(Math.random() * quotes.length)];
};
