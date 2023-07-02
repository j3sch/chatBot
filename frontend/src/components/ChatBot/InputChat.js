import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function Index({ sendMessage, isMobile }) {
	const [text, setText] = useState('');

	const MessageSend = () => {
		if (text) {
			sendMessage(text);
			setText('');
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			MessageSend();
		}
	};

	return (
		<div
			data-testid="id1"
			className="mt-8 bg-slate-100 dark:bg-slate-800 fixed bottom-0 right-0 z-50 "
			style={!isMobile ? { width: 'calc(100vw - 384px)' } : { width: '100vw' }}
		>
			<div className="flex flex-row justify-between items-center ml-2 pt-2 pb-2 ">
				<input
					id="chatInputField"
					className="w-full p-2 bg-white dark:bg-slate-600 dark:text-white rounded-lg border border-slate-300 dark:border-slate-800"
					value={text}
					onChange={(event) => {
						setText(event.target.value);
					}}
					onKeyDown={handleKeyDown}
				/>
				<div className="pl-4 pr-4 cursor-pointer" id="sendMessageButton" onClick={MessageSend}>
					<PaperAirplaneIcon
						className={`flex h-7 w-7 text-indigo-600 dark:text-white ${text ? '' : 'opacity-30'}`}
					/>
				</div>
			</div>
		</div>
	);
}

export default Index;
