import { useLayoutEffect, useState} from 'react';
import { Message } from '../popup';
import { SnackBarItem } from '../snackBarItem';
import './index.css';

interface SnackbarProps {
  messages: Message[];
  duration: number;
}

// Snackbar is used for rendering snack lists
export const Snackbar = (props: SnackbarProps) => {
    const { messages, duration } = props;
    const [ render, setRender] = useState<Message[]>([...messages]);
  
    useLayoutEffect(() => {
      setRender([...messages]);
    }, [messages]);
  
    return ( 
      <div className='snackbar_container'> 
        {render.map((message, index) => { 
          return ( 
            <SnackBarItem show={message.show} id={message.id} message={message.message} duration={duration} type={message.type} key={`node-${message.id}`} />
          ) 
        })} 
      </div> 
    ) 
};