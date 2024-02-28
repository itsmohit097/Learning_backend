const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    }

};
export default asyncHandler;




// const asyncHandler = () => {} //arrow func
// const asyncHandler = (fn) => {} //arrow func recives function as an argument
// const asyncHandler = (fn) = {(func) => {}} //recieved function passed to another function as an argument
// const asyncHandler = (fn) = async(func) => {} //we can remove the curly braces and add async


//! wrapper function of DBconnection handle by try catch block
// const asyncHandler = (fn) = async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.staus(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }