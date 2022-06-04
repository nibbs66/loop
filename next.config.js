module.exports = {
  reactStrictMode: true,
    images: {

        domains: [

            "res.cloudinary.com",
            "www.shearwater.com",
            "cdn-mdb.head.com",
            "www.cressi.com",
            "fourthelement.com",
            "us.aqualung.com",
            'icon-library.com',
            'images.pexels.com',
            "firebasestorage.googleapis.com",
        ]

    },
    rules: [
        //...
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                    },
                },
            ],
        },
    ],
    devtool: false,
}
