import { Test } from "./testModule";
import { Login, TestLogin, TestLogout, TestGetUser, TestUserStore } from "./testLoginModule";

const LINKER = {
    "MODULE-F": Test,
    "MODULE-G": Login,
    "MODULE-H": TestLogin,
    "MODULE-I": TestLogout,
    "MODULE-J": TestGetUser,
    "MODULE-K": TestUserStore,
}

export default LINKER