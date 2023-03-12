import Add from '../image/add.png';
import Cam from '../image/cam.png';
import More from '../image/more.png';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
	const { data } = useContext(ChatContext);

	return (
		<div className='chat'>
			<div className='chat-info'>
				<span>{data.user?.displayName}</span>
				<div className='chat-icons'>
					<img src={Cam} alt='' />
					<img src={Add} alt='' />
					<img src={More} alt='' />
				</div>
			</div>
			<Messages />
			<MessageInput />
		</div>
	);
};
export default Chat;
