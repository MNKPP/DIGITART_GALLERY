import Member from '../models/member.js'
import memberValidator from "../validators/member.validator.js";
import MemberDto from "../dto/member.dto.js";

const memberController = {
    createMember: async (req, res) => {
        const body = req.body;

        try {
            await memberValidator.parse(body)
        } catch (e) {
            return res.status(400).json(e.message);
        }

        const member = new Member(body);

        try {
            await member.save()
        } catch (e) {
            console.log(e);
        }

        res.status(200).json(new MemberDto(member));
    }
}

export default memberController;