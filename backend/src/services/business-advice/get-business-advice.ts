import { delay } from '../../utils/delay';
import logger from '../../utils/logger';

export const getBusinessAdvice = async () => {
	const advices = [
		'Ich hab keine Lust mit dir zu reden. Du FISCH!',
		'Lass mich in Ruhe!',
		'Halt die Fresse! Ich will schlafen',
		'Weißt du wie nervig du eigentlich bist?',
		'Ich würde mich ja geistig mit dir duellieren, aber wie ich sehe, bist du unbewaffnet.',
		'Ich würde jetzt nicht sagen, dass du dumm bist, aber ich könnt’s aufschreiben, wenn du magst.',
		'Hör auf mir zu schreiben und geh auf die Weide zu den anderen Kühen!',
		'Ich bin grade auf dem Klo, lass mich jetzt scheissen und verpiss dich!',
		'Du hast schon keine Hobbies wenn du mir die ganze Zeit schreibst oder?!',
	];

	await delay(500);

	const answer = advices[Math.floor(Math.random() * advices.length)];
	logger.info(`Business advice: ${answer}`);
	return answer;
};
