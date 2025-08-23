

// const validate = (schema) => async (req, res, next) => {
//     try {
//       const parseBody = await schema.parseAsync(req.body);
//       req.body = parseBody;
//       next();  
//     } catch (err) {
//         const message = err?.errors?.[0]?.message || "validate failed";
//         console.log("validate failed");     
//            res.status(400).json({message}) ;
//     }
// }


// module.exports = validate;