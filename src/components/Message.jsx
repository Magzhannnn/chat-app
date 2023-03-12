import { useContext, useRef, useEffect } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const Message = ({ message }) => {
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	const dateMessage = new Date(+message.date * 1000);

	const ref = useRef();

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [message]);

	return (
		<div
			ref={ref}
			className={`message ${message.senderId === currentUser.uid && 'owner'}`}
		>
			<div className='message-info'>
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt=''
				/>
				<span>{dateMessage.toString().slice(16, 21)}</span>
			</div>
			<div className='message-content'>
				{message.text && <p>{message.text}</p>}
				{message.img && <img src={message.img} alt='' />}
			</div>
		</div>
	);
};
export default Message;
