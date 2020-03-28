const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('twitter endpoint');
});

// get tweets for governor - api/states

// get tweets for country leader (and cdc if usa) - api/countries

module.exports = router;