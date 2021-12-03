const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicssExtractPlugin = require("mini-css-extract-plugin");


module.exports ={
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/i,
                use:[
                    {
                        loader:"html-loader",
                        options: {
                            minimize:true
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [MinicssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MinicssExtractPlugin()
    ]
}