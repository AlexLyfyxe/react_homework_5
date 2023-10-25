import React, { useState } from 'react';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats',
}

export default function FormText() {

  const [formText, setFormText] = useState(PrototypeForm);

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto'}}>
        <form style={{background: '#437897', borderRadius: '20px', margin: '25px 0 0 0', padding: '15px', color: '#fff'}}>
          {Object.keys(formText).map(key => (
            <div>
              <label style={{margin: '0 10px 0 0'}}>{key}:</label>
              <input 
              type="text" 
              value={formText[key]} 
              onChange={e => setFormText({...formText, [key]: e.target.value})} 
              />
              <p>{key}: {formText[key]}</p>
            </div>
          ))}
        </form>


        <div style={{margin: '60px 0 0 0', background: '#1ff435', borderRadius: '20px', padding: '15px'}}>
          {Object.keys(formText).map(key => (
            <p>{key}: {formText[key]}</p>
          ))}
        </div>

      </div>
    </>
  )

}

