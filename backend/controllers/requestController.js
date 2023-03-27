//GET Requests
// @route GET/api/request
// access Private
const getRequests = (req,res) => {
    res.status(200).json({ message: 'Get Requests' })
}

//CREATE Requests
// @route POST/api/request
// access Private
const setRequest = (req,res) => {
    res.status(200).json({ message: 'Created Request' })
}

//UPDATE Requests
// @route PUT/api/request/:id
// access Private
const updateRequest = (req,res) => {
    res.status(200).json({ message: `Updated Request ${req.params.id}` })
}

//DELETE Requests
// @route DELETE/api/request/:id
// access Private
const deleteRequest = (req,res) => {
    res.status(200).json({ message: `Deleted Request ${req.params.id}` })
}

module.exports = {
    getRequests,
    setRequest,
    updateRequest,
    deleteRequest,
}