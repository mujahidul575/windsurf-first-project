'use strict';

const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');
const gulpSass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// Move JS Files to 'dist/js'
function js() {
    return src([
            'node_modules/aos/dist/aos.js',
            'node_modules/swiper/swiper-bundle.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
            'node_modules/swiper/swiper-bundle.min.js',
            'node_modules/counterup2/dist/index.js',
            'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
            'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
            'node_modules/wowjs/dist/wow.min.js',
            'node_modules/nice-select2/dist/js/nice-select2.js',
            'node_modules/venobox/dist/venobox.min.js',
        ])
        .pipe(dest('dist/assets/js'));
}

// Move CSS to 'dist/css'
function css() {
    return src([
            'node_modules/aos/dist/aos.css',
            'node_modules/swiper/swiper-bundle.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/swiper/swiper-bundle.min.css',
            'node_modules/wowjs/css/libs/animate.css',
            'node_modules/@tabler/icons-webfont/dist/tabler-icons.min.css',
            'node_modules/nice-select2/dist/css/nice-select2.css',
            'node_modules/venobox/dist/venobox.min.css',
            'node_modules/@tabler/icons-webfont/dist/tabler-icons.min.css'
        ])
        .pipe(dest('dist/assets/css'));
}

// Move Web Fonts files to 'dist/fonts' folder
function webFonts() {
    return src('node_modules/@tabler/icons-webfont/dist/fonts/tabler-icons.*')
        .pipe(dest('dist/assets/css/fonts'));
}

// Move all static images to 'dist/img'
function staticImages() {
    return src('static/img/*/*')
        .pipe(dest('dist/assets/img'));
}

// Move all static JS to 'dist/js'
function staticJS() {
    return src('static/js/*')
        .pipe(dest('dist/assets/js'));
}

// Move all static files to 'dist/*'
function staticFiles() {
    return src(['static/**/*', '!static/**/*.js', '!static/**/*.{png,jpg,jpeg,gif,webp}'])
        .pipe(dest('dist/assets/'));
}

// SCSS to CSS convert
function sassToCSS() {
    return src('src/scss/*.scss')
        .pipe(gulpSass({
            quietDeps: true,
            silenceDeprecations: ['legacy-js-api'],
        }).on('error', gulpSass.logError))
        .pipe(postcss([
            autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            })
        ]))
        .pipe(dest('dist/'));
}

// Move HTML files to 'dist/*.html'
function htmlFiles() {
    return src('src/html/*.html')
        .pipe(dest('dist/'));
}

// Watching Files
function watching() {
    watch('static/img/*/*', staticImages);
    watch('static/js/*', staticJS);
    watch('static/*', staticFiles);
    watch('src/scss/*.scss', sassToCSS);
    watch('src/html/*.html', htmlFiles);
}

// Exports
exports.default = series(parallel(js, css, webFonts, staticImages, staticJS, staticFiles, sassToCSS, htmlFiles), watching);
exports.watch = watching;