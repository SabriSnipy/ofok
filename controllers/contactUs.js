let contact_us = require ('../models/contactUs');

module.exports = {
    contactUs: async (req, res, next) => {
        try {
            let { name, email, subject, message} = req.body;
        let testMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let validMail=testMail.test(email)
        if(validMail && name && subject && message){
          const MESSAGE= new contact_us({
            name,
            subject,
            message,
            email
          })
          await MESSAGE.save()
            res.status(200).json({
              message:"Your message have been sent",
            });
        
          }else{
          res.status(400).json({message: "All fields are required"})
        }
        } catch (error) {
            res.status(400).json({message: "All fields are required"})
        }
      },
}