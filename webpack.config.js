const path = require('path');

module.exports = {
    entry: {
        // Scripts
        'main': './scripts/entry/main.js',
        'fastsearch': './scripts/entry/fastsearch.js',
        'intersect': './scripts/entry/intersect.js',
        'sentry': './scripts/entry/sentry.js',
        'turbo': './scripts/entry/turbo.js',
        'theme': './scripts/entry/themeToggle.js',
        'copyCode': './scripts/entry/copyCode.js',
        // Pages
        'home': './scripts/page/home.js',
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
        filename: '[name].js',
    },
};
