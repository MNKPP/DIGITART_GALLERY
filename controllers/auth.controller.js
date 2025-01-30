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

        let member;
        try {
            member = await authService.register(body);

            if (!member) {
                return res.status(409).json({
                    message: `Member already exists`
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: `${e.message} - Error creating member`
            });
        }

        return res.status(200).json(new MemberDto(member));
    },
    login: async (req, res) => {
        const body = req.body;

        try {
            await memberValidator.parse(body);
        } catch (e) {
            return res.status(400).json({
                message: `${e.message} - Invalid login data`
            })
        }

        let token;
        try {
            token = await authService.login(body);

            if (!token) {
                return res.status(401).json({
                    message: `Invalid login credentials`
                })
            }

        } catch (e) {
            return res.status(500).json({
                message: `${e.message} - Error logging in`
            })
        }

        return res.status(200).json({token})

    }
}

export default authController;