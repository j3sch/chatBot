import axios from 'axios';
import { TRANSLATION_LANGUAGE_MISSING, TRANSLATION_PUNCTUATION_MISSING } from '../../consts/error-messages';
import { delay } from '../../utils/delay';
import logger from '../../utils/logger';

export const getTranslation = async (message: string) => {
	logger.info(`Message: ${message}`);

	const body = {
		text: [removeLanguageSentence(message)],
		target_lang: findLanguage(message),
	};

	if (!body.target_lang) {
		await delay(500);
		throw new Error(TRANSLATION_LANGUAGE_MISSING);
	}

	if (JSON.stringify(body.text) == JSON.stringify([''])) {
		await delay(500);
		throw new Error(TRANSLATION_PUNCTUATION_MISSING);
	}

	const headers = {
		headers: {
			Authorization: process.env.DEEPL_AUTH_KEY,
		},
	};

	return axios
		.post('https://api-free.deepl.com/v2/translate', body, headers)
		.then((res) => {
			const answer = res.data.translations[0].text;
			logger.info(`Translation: ${answer}`);
			return answer;
		})
		.catch((err) => {
			throw new Error(err);
		});
};
export function findLanguage(input: string) {
	input = input.toLocaleLowerCase();
	const languages = [
		'deutsch',
		'englisch',
		'französisch',
		'spanisch',
		'italienisch',
		'portugiesisch'
	];
	const languageCodes = ['DE', 'EN', 'FR', 'ES', 'IT', 'PT'];

	for (let i = 0; i < languages.length; i++) {
		if (input.includes(languages[i])) {
			return languageCodes[i];
		}
	}
	return undefined;
}
export function removeLanguageSentence(input: string) {
	let convertedInput = input.replaceAll('.', '.🔪');
	convertedInput = convertedInput.replaceAll(':', ':🔪');
	convertedInput = convertedInput.replaceAll('?', '?🔪');
	convertedInput = convertedInput.replaceAll('!', '!🔪');

	const sentences = convertedInput.split('🔪');

	let result = '';
	for (let i = 0; i < sentences.length; i++) {
		if (findLanguage(sentences[i]) == undefined) {
			result += sentences[i];
		}
	}
	return result;
}
