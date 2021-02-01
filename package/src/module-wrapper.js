import React from "react";
import { defaults } from "./Defaults"

const wrapper = (props) => {
    return props.module(defaults.user, defaults.events.logout, props.params)
}

export default wrapper;