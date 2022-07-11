import {atom, selector} from "recoil";


export const UserState=atom({
    key:"userState",
    default:{
        email: "",
        nickname: "",
        position: "",
        profileImageUrl: "",
        roleType:""
    }
})

export const UserSelector = selector({
    key:"userSelector",
    get:({get})=>{
        const user = get(UserState)
        return user;
    }
})