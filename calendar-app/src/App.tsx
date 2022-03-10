import React, { useState } from 'react';
import './App.css';

import FullCalendar, { EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from './events';
import Modal, { Styles } from 'react-modal';

function App() {
  const [ isOpen, setIsOpen ] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const customStyles: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 99
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      // right: '40px',
      // bottom: '40px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
  const eventClick = (info: EventClickArg) => {
    setIsOpen(true)
  }
  return (
    <>
      <h1>名取さな すけじゅる〜ん（非公式）</h1>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        headerToolbar={{
          start: 'dayGridMonth,timeGridWeek'
        }}
        initialView="dayGridMonth"
        events={events}
        locale='ja'
        eventClick={eventClick}
      />
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        
      </Modal>
    </>
  );
}

export default App;
