import React, { useState, useContext, useEffect } from 'react';
import MessageContext from '../../context/message/messageContext';

const MessageForm = () => {
  const messageContext = useContext(MessageContext);

  const { addMessage, clearCurrentMessage, currentMessage } = messageContext;

  useEffect(() => {
    if (currentMessage !== null) {
      setMessage(currentMessage);
    } else {
      setMessage({
        name: '',
        email: '',
        phone: '',
        msj:'',
        type: 'personal'
      });
    }
  }, [messageContext, currentMessage]);

  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    msj:'',
    _id:'',
    type: 'personal'
  });

  const { name, email, phone, msj, type} = message;

  const onChange = e =>
    setMessage({ ...message, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (currentMessage != null) {
      addMessage({
        msj:msj,
        _email:email
      });
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentMessage();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        Add Message
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Message Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <textarea name="msj" value={msj} onChange={onChange}>
      </textarea>
      <div>
        <input
          type='submit'
          value='Add Message'
          className='btn btn-primary btn-block'
        />
      </div>
      {currentMessage && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default MessageForm;
