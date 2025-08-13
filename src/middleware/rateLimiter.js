import ratelimit from "../config/upstash.js";
import ratelimiter from "../config/upstash.js";


const rateLimiter = async(requestAnimationFrame,res,next)=>{
    try {

        //here we just kept it safe.
        // in a real-world-app you'd like to put the userId or ipAddress as your key 
        const {success} = await ratelimit.limit("my-rate-limit")

        if(!success){
            return res.status(429).json({msg:"Too many req, please try later"})
        }

        next()
    } catch (error) {
        console.log('Rate Limit Error',error)
        next(error)
    }

}


export default rateLimiter;
