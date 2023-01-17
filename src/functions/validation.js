export const validation = data => {
    const errors = {};
    if(!data.userName.trim()) {
        errors.userName = "enter username..."
    } else {
        delete errors.userName
    }
    if(!data.password) {
        errors.password = "enter password !"
    } else if (data.password.lenght < 6) {
        errors.password = "password must be at least 6 characters"
    } else {
        delete errors.password
    }
    return errors;
};