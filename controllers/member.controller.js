import memberValidator from "../validators/member.validator.js";
import memberService from "../services/member.service.js";
import MemberDto from "../dto/member.dto.js";

const memberController = {
    createMember: async (req, res) => {
        const body = req.body;

        try {
            await memberValidator.parse(body)
        } catch (e) {
            return res.status(400).json(e.message);
        }

        try {
            const member = await memberService.createMember(body);
            res.status(200).json(new MemberDto(member));
        } catch (e) {
            console.log(e);
        }
    }
}

export default memberController;