import Member from '../models/member.js'

const memberController = {
    createMember: async (req, res) => {

        const member = new Member({
            name: 'Mike',
            email: 'email',
            password: 'password',
            role: 'admin'
        });

        await member.save()

        res.status(200).json(member);
    }
}

export default memberController;