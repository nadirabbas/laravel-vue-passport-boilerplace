const mix = require('laravel-mix');
const path = require('path');


mix.js('resources/js/main.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css', {}, [
        require("tailwindcss")
    ]).webpackConfig({
        resolve: {
            alias: {
                "@assets": path.resolve(__dirname, "resources/sass"),
                "@": path.resolve(__dirname, "resources/js"),
            }
        },
        output: {
            chunkFilename: '[name].js?id=[chunkhash]',
        }
    }).disableNotifications()
