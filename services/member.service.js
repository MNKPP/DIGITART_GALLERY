import Member from "../models/member.js";

const memberService = {
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