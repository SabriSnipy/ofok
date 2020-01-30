let router = require('express-promise-router')();
let {contactUs} = require ("../controllers/contactUs");

router.route('/contact-us')
.post(contactUs);

module.exports = router;