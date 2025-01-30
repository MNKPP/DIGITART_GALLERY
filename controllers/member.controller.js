import memberValidator from "../validators/member.validator.js";
import memberService from "../services/member.service.js";
import MemberDto from "../dto/member.dto.js";

const memberController = {
    getMemberById: async (req, res) => {
        const id = req.params.id;
        try {
            const member = await memberService.getMemberById(id);
            res.status(200).json(new MemberDto(member));
        } catch (e) {
            res.status(404).json({
                message: `${e.message} - Member not found`
            });
        }
    },
    createMember: async (req, res) => {
        const body = req.body;

        try {
            await memberValidator.parse(body)
        } catch (e) {
            return res.status(400).json({
                message: `${e.message} - Invalid member data`
            });
        }

        try {
            const member = await memberService.createMember(body);
            res.status(200).json(new MemberDto(member));
        } catch (e) {
            res.status(500).json({
                message: `${e.message} - Error creating member`
            });
        }
    }
}

export default memberController;