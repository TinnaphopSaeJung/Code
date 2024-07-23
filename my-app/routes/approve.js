var express = require('express');
var router = express.Router();
var userModel = require('../models/user')
const { detoken, checkRole } = require('../Middleware/auth')

router.put('/:id', detoken, checkRole(['admin']), async (req, res) => {
    try {
        let id = req.params.id

        let user = await userModel.findById(id)
        user.approve = true
        await user.save();
    
        return res.send({
            message: `${user.username} has been approved.`
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
});



module.exports = router