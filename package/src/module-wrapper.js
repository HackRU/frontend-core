import React from "react";
import { defaults } from "./Defaults";
import { Profile } from "./Profile";
const wrapper = (props) => {
    return props.module(defaults, props.params, Profile);
};

export default wrapper;
