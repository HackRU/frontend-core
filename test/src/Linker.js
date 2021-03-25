import { Test } from "./testModule";
import { Login, TestLogin, TestLogout } from "./testLoginModule";

const LINKER = {
    "MODULE-F": Test,
    "MODULE-G": Login,
    "MODULE-H": TestLogin,
    "MODULE-I": TestLogout,
}

export default LINKER