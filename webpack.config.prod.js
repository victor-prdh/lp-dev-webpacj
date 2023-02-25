const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                use: [
                    {
                        loader: `img-optimize-loader`,
                        options: {
                            compress: {
                                webp: true,
                                disableOnDevelopment: true
                            }
                        },
                    },
                ],
            }
        ]
    }
};