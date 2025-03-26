import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Intent } from '../types/chat';
import { Plus, Save, Trash2, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../utils/cn';

interface TrainingPanelProps {
  intents: Intent[];
  onSave: (intents: Intent[]) => void;
}

export const TrainingPanel: React.FC<TrainingPanelProps> = ({ intents: initialIntents, onSave }) => {
  const [intents, setIntents] = useState<Intent[]>(initialIntents);
  const [newIntent, setNewIntent] = useState({ tag: '', patterns: [''], responses: [''] });
  const [error, setError] = useState('');
  const [expandedIntent, setExpandedIntent] = useState<number | null>(null);

  const handleAddIntent = () => {
    if (!newIntent.tag || !newIntent.patterns[0] || !newIntent.responses[0]) {
      setError('Please fill in all fields');
      return;
    }
    setIntents([...intents, newIntent]);
    setNewIntent({ tag: '', patterns: [''], responses: [''] });
    setError('');
  };

  const handleSave = () => {
    onSave(intents);
  };

  const handleRemoveIntent = (index: number) => {
    setIntents(intents.filter((_, i) => i !== index));
  };

  const handleAddPattern = () => {
    setNewIntent({
      ...newIntent,
      patterns: [...newIntent.patterns, '']
    });
  };

  const handleRemovePattern = (index: number) => {
    setNewIntent({
      ...newIntent,
      patterns: newIntent.patterns.filter((_, i) => i !== index)
    });
  };

  const handleAddResponse = () => {
    setNewIntent({
      ...newIntent,
      responses: [...newIntent.responses, '']
    });
  };

  const handleRemoveResponse = (index: number) => {
    setNewIntent({
      ...newIntent,
      responses: newIntent.responses.filter((_, i) => i !== index)
    });
  };

  const handlePatternChange = (index: number, value: string) => {
    const newPatterns = [...newIntent.patterns];
    newPatterns[index] = value;
    setNewIntent({
      ...newIntent,
      patterns: newPatterns
    });
  };

  const handleResponseChange = (index: number, value: string) => {
    const newResponses = [...newIntent.responses];
    newResponses[index] = value;
    setNewIntent({
      ...newIntent,
      responses: newResponses
    });
  };

  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Training Panel</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Save size={20} />
            Save Changes
          </motion.button>
        </div>
        
        <div className="space-y-4">
          {intents.map((intent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedIntent(expandedIntent === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    {expandedIntent === index ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{intent.tag}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveIntent(index);
                  }}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {expandedIntent === index && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Patterns:</h4>
                      <ul className="space-y-2">
                        {intent.patterns.map((pattern, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-6 text-gray-400">{i + 1}.</span>
                            <span className="flex-1 text-gray-600">{pattern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Responses:</h4>
                      <ul className="space-y-2">
                        {intent.responses.map((response, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-6 text-gray-400">{i + 1}.</span>
                            <span className="flex-1 text-gray-600">{response}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 border rounded-lg bg-white shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-6">Add New Intent</h3>
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
              <AlertCircle size={20} />
              {error}
            </div>
          )}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intent Tag
              </label>
              <input
                type="text"
                value={newIntent.tag}
                onChange={(e) => setNewIntent({ ...newIntent, tag: e.target.value })}
                placeholder="e.g., admissions"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patterns
              </label>
              <div className="space-y-2">
                {newIntent.patterns.map((pattern, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={pattern}
                      onChange={(e) => handlePatternChange(index, e.target.value)}
                      placeholder="e.g., How do I apply?"
                      className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemovePattern(index)}
                      className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddPattern}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add Pattern
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Responses
              </label>
              <div className="space-y-2">
                {newIntent.responses.map((response, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={response}
                      onChange={(e) => handleResponseChange(index, e.target.value)}
                      placeholder="Enter response"
                      className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveResponse(index)}
                      className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddResponse}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add Response
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddIntent}
              className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add Intent
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};