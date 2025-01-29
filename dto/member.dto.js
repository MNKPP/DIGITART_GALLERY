class MemberDto {
    username;
    email;

    constructor(data) {
        this.username = data.username;
        this.email = data.email;
    }
}

export default MemberDto;