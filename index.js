const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED IN!");
    } else {
        console.log("INCORRECT LOGIN!");
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$drMA0bcoIU29KymqloCuUeUsfZfRVqWJKHPg4rfL6v6Y54yDThCgu');