import { Intent } from '../types/chat';

function calculateMatchScore(input: string, pattern: string): number {
  const inputWords = input.toLowerCase().split(/\s+/);
  const patternWords = pattern.toLowerCase().split(/\s+/);
  
  let score = 0;
  
  // Exact match bonus
  if (input.toLowerCase() === pattern.toLowerCase()) {
    score += 20;
  }

  // Single word exact match
  if (inputWords.length === 1 && patternWords.includes(input.toLowerCase())) {
    score += 15;
  }

  // Word matches
  const matchedWords = inputWords.filter(word => patternWords.includes(word));
  score += matchedWords.length * 5;

  // Consecutive words bonus
  let consecutiveMatches = 0;
  for (let i = 0; i < inputWords.length - 1; i++) {
    const currentWordIndex = patternWords.indexOf(inputWords[i]);
    if (currentWordIndex !== -1 && 
        patternWords[currentWordIndex + 1] === inputWords[i + 1]) {
      consecutiveMatches++;
    }
  }
  score += consecutiveMatches * 3;

  // Partial word matches
  for (const inputWord of inputWords) {
    for (const patternWord of patternWords) {
      if (patternWord.includes(inputWord) || inputWord.includes(patternWord)) {
        score += 2;
      }
    }
  }

  return score;
}

// Keep track of last used responses to avoid repetition
const lastResponses = new Map<string, Set<string>>();

function getUniqueResponse(intent: Intent): string {
  const intentResponses = lastResponses.get(intent.tag) || new Set<string>();
  
  // Filter out recently used responses
  const availableResponses = intent.responses.filter(response => !intentResponses.has(response));
  
  // If all responses have been used, reset the tracking
  if (availableResponses.length === 0) {
    intentResponses.clear();
    return intent.responses[Math.floor(Math.random() * intent.responses.length)];
  }

  // Select a random response from available ones
  const response = availableResponses[Math.floor(Math.random() * availableResponses.length)];
  
  // Update tracking
  intentResponses.add(response);
  if (intentResponses.size >= Math.min(5, intent.responses.length)) {
    intentResponses.clear();
  }
  lastResponses.set(intent.tag, intentResponses);
  
  return response;
}

export function findBestMatch(input: string, intents: Intent[]): string {
  if (!input.trim()) {
    return "I didn't catch that. Could you please rephrase your question?";
  }

  let bestMatch = {
    intent: null as Intent | null,
    score: 0,
    pattern: ''
  };

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const score = calculateMatchScore(input, pattern);
      
      if (score > bestMatch.score) {
        bestMatch = {
          intent,
          score,
          pattern
        };
      }
    }
  }

  // Threshold for accepting a match
  if (bestMatch.score < 5) {
    return "I'm not quite sure I understand. Could you please rephrase your question or provide more details? You can ask about topics like admissions, scholarships, campus life, or specific programs.";
  }

  return bestMatch.intent ? getUniqueResponse(bestMatch.intent) : "I apologize, but I'm not sure how to respond to that. Could you please try asking in a different way?";
}