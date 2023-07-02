import { User } from '@prisma/client';
import { Context } from '../../configs/prisma';
import { USER_DOES_NOT_EXIST } from '../../consts/error-messages';
import userDb from '../db/user';

export async function getUser(userId: string, ctx: Context): Promise<User> {
	const user = await userDb.getUserById(userId, ctx);

	if (!user) {
		throw new Error(USER_DOES_NOT_EXIST);
	}

	return user;
}
