import logger from '../utils/logger';
import { getBusinessAdvice } from '../services/business-advice/get-business-advice';

jest.mock('../utils/logger', () => ({
	info: jest.fn(),
}));

describe('getJoke', () => {
	it('should send the advice to the socket', async () => {
		const advices = [
			'Ich hab keine Lust mir dir zu reden. Du FISCH!',
			'Lass mich in Ruhe!',
			'Halt die Fresse! Ich will schlafen',
			'Weißt du wie nervig du eigentlich bist?',
			'Ich würde mich ja geistig mit dir duellieren, aber wie ich sehe, bist du unbewaffnet.',
			'Ich würde jetzt nicht sagen, dass du dumm bist, aber ich könnt’s aufschreiben, wenn du magst.',
			'Hör auf mir zu schreiben und geh auf die Weide zu den anderen Kühen!',
			'Ich bin grade auf dem Klo, lass mich jetzt scheissen und verpiss dich!',
			'Du hast schon keine Hobbies wenn du mir die ganze Zeit schreibst oder?!',
		];
		const result = await getBusinessAdvice();
		expect(advices.includes(result)).toBe(true);
	});

	it('should log the advice', async () => {
		await getBusinessAdvice();
		expect(logger.info).toHaveBeenCalled();
	});
});
