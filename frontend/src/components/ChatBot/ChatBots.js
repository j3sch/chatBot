import { useSelector, useDispatch } from 'react-redux';

import { ChangeChatId } from '../../store/actions/Chatbot';

function Index({ name, img, text, time, event, id }) {
	const dispatch = useDispatch();

	const currentChatId = useSelector((state) => state.chatState.ChatId);

	const changeChatId = (number) => {
		dispatch(ChangeChatId(number));
	};

	return (
		<div
			data-testid="id1"
			id={'chatBot' + id}
			className={
				'pl-4 pr-4 cursor-pointer ' +
				(currentChatId === id
					? 'bg-indigo-100 dark:bg-slate-500'
					: 'bg-white hover:bg-indigo-50 dark:bg-slate-700 dark:hover:bg-slate-600')
			}
			onClick={() => {
				changeChatId(id);
				if (event != undefined) {
					event();
				}
			}}
		>
			<div className="pt-4">
				<div>
					<div className="flex flex-row justify-between ">
						<div className="flex flex-row items-center">
							<img src={img} alt="Business Mann 42" className="h-16 w-16 rounded-full" />
							<div className="ml-4 mr-4 flex-1">
								<h1 className="text-xl font-bold dark:text-white">{name}</h1>
								<h1 className="text max-h-12 overflow-hidden dark:text-white">{text}</h1>
							</div>
						</div>
						<div className="flex flex-row items-center">
							<h1 className="text">{time}</h1>
						</div>
					</div>
				</div>
				<div className="ml-20 mt-4 -mr-4 h-px bg-slate-300 dark:bg-slate-400" />
			</div>
		</div>
	);
}

export default Index;
