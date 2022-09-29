import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello Dima',
      id: '2fsff3435',
      user: { id: 'sdafeg', name: 'Dima' },
    },
    {
      message: 'Hello Viktor',
      id: '2fsf435435okdfkf3435',
      user: { id: 'sdjhgjfhgfhafeg', name: 'Vlad' },
    },
  ]);
  return (
    <div className="App">
      <div>
        <div
          style={{
            border: '1px solid black',
            padding: '10px',
            height: '300px',
            width: '300px',
            overflowY: 'scroll',
          }}
        >
          {messages.map(m => {
            return (
              <div key={m.id}>
                <b>{m.user.name}:</b> {m.message}
                <hr />
              </div>
            );
          })}
        </div>
        <textarea></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}

export default App;
