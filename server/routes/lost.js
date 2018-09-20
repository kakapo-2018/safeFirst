var router = require('express').Router()

router.post('/lost', lostRoute)

function lostRoute() {
    console.log('lost route running!');

}

module.exports = router