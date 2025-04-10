
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Mail, Cpu, Terminal, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Terminal commands simulation
  const addTerminalLine = (line: string, delay: number = 100) => {
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, line]);
      if (window.playSound) window.playSound('notification');
      
      // Scroll terminal to bottom
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, delay);
  };
  
  // Initialize terminal
  useEffect(() => {
    setTerminalOutput([]);
    const now = new Date();
    
    addTerminalLine(`[SYSTEM] ${now.toLocaleString()} - Contact module initialized`);
    addTerminalLine(`[SYSTEM] Ready to receive transmission...`, 400);
    addTerminalLine(`[SYSTEM] Enter message details below to establish secure connection.`, 800);
  }, []);

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      addTerminalLine(`[ERROR] Missing required fields. Transmission aborted.`);
      return;
    }
    
    setSending(true);
    addTerminalLine(`[SYSTEM] Preparing secure transmission...`);
    
    // Simulate message sending process
    setTimeout(() => addTerminalLine(`[SYSTEM] Validating sender: ${name}...`), 500);
    setTimeout(() => addTerminalLine(`[SYSTEM] Encrypting message content...`), 1000);
    setTimeout(() => addTerminalLine(`[SYSTEM] Establishing secure channel...`), 1500);
    setTimeout(() => addTerminalLine(`[SYSTEM] Transmitting data packets...`), 2000);
    
    setTimeout(() => {
      addTerminalLine(`[SYSTEM] Message successfully transmitted.`);
      addTerminalLine(`[SYSTEM] Confirmation code: ${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
      setSending(false);
      setSent(true);
      window.playSound?.('transition');
    }, 3000);
  };
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSent(false);
    
    // Clear terminal and reinitialize
    setTerminalOutput([]);
    const now = new Date();
    addTerminalLine(`[SYSTEM] ${now.toLocaleString()} - Contact module reset`);
    addTerminalLine(`[SYSTEM] Ready for new transmission...`, 400);
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-futura font-bold flex items-center">
            <Send className="mr-3 text-cyber-blue" size={28} />
            <span className="text-cyber-light">SECURE COMMUNICATION</span>
          </h1>
          <p className="text-cyber-light/70 mt-2">
            Establish a secure communication channel for inquiries, collaborations, or security consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="cyber-panel">
            <div className="flex items-center mb-6">
              <Terminal className="mr-2 text-cyber-purple" size={20} />
              <h2 className="text-xl font-futura">MESSAGE TRANSMISSION</h2>
            </div>
            
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyber-dark/50 border-2 border-cyber-green mx-auto mb-4 flex items-center justify-center">
                  <Terminal size={32} className="text-cyber-green" />
                </div>
                
                <h3 className="text-cyber-green text-xl mb-2">Transmission Complete</h3>
                <p className="text-cyber-light/70 mb-6">Your message has been successfully transmitted through our secure channel.</p>
                
                <button 
                  className="cyber-button"
                  onClick={resetForm}
                  onMouseEnter={() => window.playSound?.('hover')}
                >
                  Send New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="flex items-center text-sm mb-1 text-cyber-light/80">
                    <User size={14} className="mr-2 text-cyber-blue" />
                    <span>YOUR IDENTITY</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/30 p-3 text-cyber-light focus:border-cyber-blue/80 focus:outline-none"
                    placeholder="Enter your name"
                    onFocus={() => window.playSound?.('hover')}
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm mb-1 text-cyber-light/80">
                    <Mail size={14} className="mr-2 text-cyber-blue" />
                    <span>CONTACT FREQUENCY</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/30 p-3 text-cyber-light focus:border-cyber-blue/80 focus:outline-none"
                    placeholder="Enter your email"
                    onFocus={() => window.playSound?.('hover')}
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm mb-1 text-cyber-light/80">
                    <Cpu size={14} className="mr-2 text-cyber-blue" />
                    <span>TRANSMISSION SUBJECT</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/30 p-3 text-cyber-light focus:border-cyber-blue/80 focus:outline-none"
                    placeholder="Enter subject"
                    onFocus={() => window.playSound?.('hover')}
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm mb-1 text-cyber-light/80">
                    <MessageSquare size={14} className="mr-2 text-cyber-blue" />
                    <span>MESSAGE PAYLOAD</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-cyber-dark/80 border border-cyber-blue/30 p-3 text-cyber-light focus:border-cyber-blue/80 focus:outline-none h-32"
                    placeholder="Enter your message"
                    onFocus={() => window.playSound?.('hover')}
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="cyber-button w-full flex items-center justify-center"
                    disabled={sending}
                    onMouseEnter={() => window.playSound?.('hover')}
                  >
                    {sending ? (
                      <>
                        <span className="mr-2">TRANSMITTING</span>
                        <div className="w-4 h-4 border-2 border-cyber-light border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        <span>SEND TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Terminal Output */}
          <div className="cyber-panel bg-cyber-dark/90 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-2 px-2 py-1 bg-cyber-dark border-b border-cyber-purple/30">
              <div className="flex items-center">
                <Terminal size={16} className="text-cyber-purple mr-2" />
                <span className="text-sm text-cyber-light">system_terminal</span>
              </div>
              
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyber-red"></div>
                <div className="w-2 h-2 rounded-full bg-cyber-green"></div>
                <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
              </div>
            </div>
            
            <div 
              ref={terminalRef}
              className="flex-1 p-4 font-cyber text-sm overflow-y-auto terminal-scrollbar"
              style={{ maxHeight: '400px' }}
            >
              {terminalOutput.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className="text-cyber-green">$</span>
                  <span className="text-cyber-light ml-2">{line}</span>
                </div>
              ))}
              
              <div className="h-4 w-2 bg-cyber-blue animate-pulse inline-block"></div>
            </div>
          </div>
        </div>
        
        {/* Connection Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cyber-panel">
            <h3 className="text-lg font-futura text-cyber-blue mb-2 flex items-center">
              <Mail className="mr-2" size={18} />
              <span>EMAIL</span>
            </h3>
            <p className="text-cyber-light/80 text-sm">contact@cybersecurity.com</p>
            <div className="mt-2 text-xs text-cyber-light/50">SECURE PGP AVAILABLE</div>
          </div>
          
          <div className="cyber-panel">
            <h3 className="text-lg font-futura text-cyber-purple mb-2 flex items-center">
              <Cpu className="mr-2" size={18} />
              <span>LOCATION</span>
            </h3>
            <p className="text-cyber-light/80 text-sm">Cyber Operations Center</p>
            <div className="mt-2 text-xs text-cyber-light/50">COORDINATES ENCRYPTED</div>
          </div>
          
          <div className="cyber-panel">
            <h3 className="text-lg font-futura text-cyber-green mb-2 flex items-center">
              <Terminal className="mr-2" size={18} />
              <span>RESPONSE TIME</span>
            </h3>
            <p className="text-cyber-light/80 text-sm">24-48 Hours</p>
            <div className="mt-2 text-xs text-cyber-light/50">PRIORITY CHANNELS AVAILABLE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
