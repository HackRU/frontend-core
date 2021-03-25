// import scss from "rollup-plugin-scss";
import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';

import pkg from "./package.json";

// export default 
//     [
//         {
//             input: "src/index.js",
//             output: [{
//                 file: pkg.main+"/index.js",
//                 format: "cjs",
//                 exports: "named",
//                 sourcemap: true,
//                 strict: false
//             }],
//             plugins: [
//                 babel({
//                     exclude: "node_modules/**",
//                     presets: [
//                         ["@babel/preset-react", {modules: false}]
//                     ]
//                 }),
//                 scss()
//             ],
//             external: [
//                 "react",
//                 "react-dom"
//             ]

//         },
//     ]
    
// ;

export default 
    [
        {
            input: "src/index.js",
            output: {
                file: pkg.main,
                format: "cjs"
            },
            external: [
                'react',
                'react-proptypes',
                'Profile',
                'Defaults',
                'prop-types',
            ],
            plugins: [
                resolve(),
                babel({
                    exclude: 'node_modules/**',
                    presets: [
                        ["@babel/preset-react", {modules: false}]
                    ]
                })
            ]
        },
    ]
    
;