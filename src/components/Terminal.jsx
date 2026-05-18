import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);

  const logs = [
    "[SYSTEM] Booting secure shell...",
    "[NETWORK] Protocol 8.2 established",
    "[AUTH] Encrypted handshake success",
    "[INTEL] Analyzing neural networks...",
    "[DATA] Decrypting packet 0x4F... 100%",
    "[WARN] Breach detected in sector 7G",
    "[SECURITY] Bypassing mainframe firewall",
    "[SYSTEM] CPU Load: 12% | Temp: 42°C",
    "[LOG] SQL Injection attempted... Blocked",
    "[DATA] Fetching user_credentials... [MASKED]",
    "[SYSTEM] Terminal ready for input",
    "> node process_data.js",
    "Loading modules... [OK]",
    "Connecting to database... [OK]",
    "Querying 'projects'... 12 results found",
    "> ssh admin@remote_host",
    "Requesting access... Granted",
    "Current directory: /root/vault",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, logs[index % logs.length]].slice(-15));
      index++;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        background: 'rgba(0, 20, 0, 0.8)',
        border: '1px solid #00ff41',
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        color: '#00ff41',
        width: '100%',
        maxWidth: '500px',
        height: '300px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20px', background: '#00ff41', color: '#000', fontSize: '0.65rem', padding: '0 10px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        SECURE_CONSOLE_v4.2 // SESSION: ACTIVE
      </div>
      <div style={{ marginTop: '20px' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ opacity: (i + 1) / lines.length }}>
            {line}
          </div>
        ))}
        <div style={{ animation: 'blink 1s infinite' }}>_</div>
      </div>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default Terminal;
