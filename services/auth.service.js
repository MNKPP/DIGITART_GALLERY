import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    login: async ({email, password}) => {
        try {
            const member  = await Member.findOne({ email: email});
            const isPasswordValid = await bcrypt.compare(password, member.password);

            if (!member || !isPasswordValid) {
                return;
            }

            return jwt.sign({email}, 'secret', {expiresIn: '1d'});

        } catch (e) {
            console.error(e.message);
        }
    },
}

export default authService;