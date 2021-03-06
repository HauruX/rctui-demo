module.exports = [{
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components|public\/)/,
        include: [/(src|node_modules\/rctui)/],
        loader: "babel-loader",
        query: {
            // presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
        },
    },
    // {
    // 	test: /rctui*\.jsx?$/,
    // 	loader: "babel-loader"
    // },
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1'],
        exclude: ['node_modules']
    },
    // {
    //     test: /\.scss$/,
    //     loader: ['style-loader', 'css-loader', 'sass-loader'],
    //     include: [/(src|styles|node_modules\/rctui)/]
    // },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader"
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?prefix=font/&limit=5000"
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    },
    {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
    }
];