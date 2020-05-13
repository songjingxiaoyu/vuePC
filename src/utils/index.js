
import {v4 as uuidv4 } from 'uuid'
//得到当前的用户临时ID
export function getUserTempId (){
    //从localStorage读取保存的用户临时ID
    let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem('USER_TEMP_ID_KEY',userTempId)
    }
    return userTempId
}