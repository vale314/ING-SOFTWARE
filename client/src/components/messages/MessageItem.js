import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MessageContext from '../../context/message/messageContext';

const MessageItem = ({ message }) => {
  const messageContext = useContext(MessageContext);
  const { deleteMessage, setCurrentMessage, clearCurrentMessage } = messageContext;

  const { _id, name, email, phone, type } = message;

  const onDelete = () => {
    deleteMessage(_id);
    clearCurrentMessage();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrentMessage(message)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageItem;
