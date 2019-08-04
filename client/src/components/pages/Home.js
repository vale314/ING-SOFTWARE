import React, { useContext, useEffect, Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import Messages from '../messages/Mesasges';
import MessagesForm from '../messages/MessageForm';
import MessageFilter from '../messages/MessageFilter'

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='grid-2'>
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactFilter />
          <Contacts api="contacts" />
        </div>
      </div>
      <div className='grid-2'>
        <div>
          <MessagesForm/>
        </div>
        <div>
          <MessageFilter/>
          <Messages/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
