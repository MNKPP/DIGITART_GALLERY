import authService from '../services/auth.service.js';
import memberValidator from "../validators/member.validator.js";
import MemberDto from "../dto/member.dto.js";

const authController = {
    register: async (req, res) => {
        const body = req.body;

        try {
            await memberValidator.parse(body)
        } catch (e) {
            return res.status(400).json({
                        message: `${e.message} - Invalid register data`
            });
        }

        try {
            const member = await authService.register(body);
            res.status(200).json(new MemberDto(member));
        } catch (e) {
            res.status(500).json({
                message: `${e.message} - Error creating member`
            });
        }
    }
}

export default authController;