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
}

export default memberController;