import React, { useState } from 'react';
import { FiSend, FiUser, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

import { Button } from '../common/Button';

export const AgentChat = ({ agentName = "Data Analyst Agent", initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages.length > 0 ? initialMessages : [
    {
      id: 1,
      sender: 'agent',
      text: `Hello Alex! I am your explainable **${agentName}**. I have audited dataset \`Q3_Sales_Performance.csv\`. How can I assist your business analysis today?`,
      findings: [
        "Identified +18.6% overall revenue surge in current month",
        "Detected 3 regional growth drivers with 94% statistical confidence",
        "Zero missing values in primary KPI target columns"
      ],
      timestamp: '10:42 AM'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const simulatedAgentReply = {
      id: Date.now() + 1,
      sender: 'agent',
      text: `Based on your query: "${input}", here is the explainable AI breakdown:`,
      findings: [
        "Primary driver: Enterprise Cloud cross-selling (+11.2%)",
        "Secondary driver: Renewal churn reduction in EMEA (+4.8%)",
        "Audit Log: Verified against 14,892 transactions in memory"
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg, simulatedAgentReply]);
    setInput('');
  };

  return (
    <div className="gb-card flex flex-col h-[600px] overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            <HiSparkles className="w-5 h-5" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">{agentName}</h3>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online & Listening
            </span>
          </div>
        </div>
        <span className="text-xs text-gray-400 bg-white px-2.5 py-1 rounded border border-gray-200">
          GlassBox V2 Explainability Model
        </span>
      </div>

      {/* Message Thread */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/40">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'agent' && (
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                AI
              </div>
            )}
            
            <div className={`max-w-xl rounded-xl p-4 text-sm ${
              msg.sender === 'user' 
                ? 'bg-indigo-600 text-white font-medium rounded-tr-none' 
                : 'bg-white text-gray-800 border border-gray-200 shadow-2xs rounded-tl-none space-y-2'
            }`}>
              <p className="leading-relaxed">{msg.text}</p>
              
              {/* Structured Key Findings for Agent Message */}
              {msg.findings && msg.findings.length > 0 && (
                <div className="mt-3 p-3 bg-indigo-50/80 rounded-lg border border-indigo-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block">Key Explainable Findings:</span>
                  {msg.findings.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-indigo-950">
                      <FiCheckCircle className="text-indigo-600 w-3.5 h-3.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}

              <span className={`text-[10px] block mt-1 ${msg.sender === 'user' ? 'text-indigo-200 text-right' : 'text-gray-400'}`}>
                {msg.timestamp}
              </span>
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                <FiUser />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${agentName} why revenue jumped, predict next month, or generate a custom chart...`}
          className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-gray-400"
        />
        <Button type="submit" variant="primary" icon={FiSend}>
          Send
        </Button>
      </form>
    </div>
  );
};
