import Member from "../models/member.js";

const memberService = {
    getMemberById: async (id) => {
        try {
            const member = await Member.findById(id)
            return member;
        }
        catch (e) {
            console.error(e.message);
        }
    },
};

export default memberService;