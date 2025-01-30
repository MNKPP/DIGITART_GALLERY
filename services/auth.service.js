import bcrypt from 'bcrypt';

import Member from '../models/member.js';

const authService = {
    register: async ({username, email, password}) => {

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const member = new Member({username, email, password: hashedPassword});
            return await member.save();
        } catch (e) {
            console.error(e.message);
        }
    },
    login: async () => {

    },
}

export default authService;