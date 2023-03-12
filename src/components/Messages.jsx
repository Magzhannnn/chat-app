import Message from './Message';
import { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import { onSnapshot, doc } from 'firebase/firestore';

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { data } = useContext(ChatContext);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, 'chats', data.chatId), doc => {
			doc.exists() && setMessages(doc.data().messages);
		});

		return () => {
			unsub();
		};
	}, [data.chatId]);

	return (
		<div className='messages'>
			{messages.map(message => (
				<Message key={message.id} message={message} />
			))}
		</div>
	);
};
export default Messages;
