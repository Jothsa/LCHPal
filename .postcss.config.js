module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-jit-props": {
            files: ["node_modules/open-props/open-props.min.js"],
        },
        "preset-env": {},
    },
};
