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
    createMember: async (member) => {

        const newMember = new Member(member);

        try {
            await newMember.save();
            return newMember;
        }
        catch (e) {
            console.error(e.message);
        }
    }
};

export default memberService;