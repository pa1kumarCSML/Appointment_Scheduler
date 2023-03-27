//CREATE User
// @route POST/api/users
// access Private
const setUser = (req,res) => {
    res.status(200).json({ message: 'Created User' })
}

module.exports = {
    setUser,
}