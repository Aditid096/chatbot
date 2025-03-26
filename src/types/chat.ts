export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Intent {
  tag: string;
  patterns: string[];
  responses: string[];
}

export interface TrainingData {
  intents: Intent[];
}