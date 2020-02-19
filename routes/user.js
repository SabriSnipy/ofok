let router = require('express-promise-router')();
let {contactUs,becomeAVolunteer} = require ("../controllers/contactUs");

router.route('/contact-us')
.post(contactUs);

router.route('/become-a-volunteer')
.post(becomeAVolunteer);

module.exports = router;