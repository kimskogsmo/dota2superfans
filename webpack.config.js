const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        entry: "./index.js",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "./public"),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(ts|tsx)$/,
                    loader: "ts-loader",
                },
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: false
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            })
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),
            },
            port: 3000,
            historyApiFallback: true,
        }
    }
};
