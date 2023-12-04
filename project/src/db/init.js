import usermodel from "../model/user/index.js"
import postmodel from "../model/post/index.js"
import commentmodel from "../model/comment/index.js"
import likemodel from "../model/like/index.js"
import followermodel from "../model/follower/index.js"
import userfollowermodel from "../model/userfollower/index.js"
import loginmodel from "../model/user_login/index.js"

const initdb = async()=>{
await loginmodel.sync({
alter:true,
force:false
}),
await usermodel.sync({
    alter:true,
    force:false
 })
await postmodel.sync({
    alter:true,
    force:false
}),await commentmodel.sync({
    alter:true,
    force:false
}),await likemodel.sync({
    alter:true,
    force:false
}),
await followermodel.sync({
    alter:true,
    force:false
}),
await userfollowermodel.sync({
    alter:true,
    force:false
})

}
export default  initdb