const lib = {
    RoleUser: 1,
    RoleAss: 2,
    is_self: (role) => {
        return role == lib.RoleUser
    }
}

export default lib
