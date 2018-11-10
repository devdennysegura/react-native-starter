'use strict';
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const iconfont = require('gulp-iconfont');
const source = require('vinyl-source-stream');
const RESOURCE_FILE = ['src/assets/**'];
const TEST_RESOURCE_FILE = ['src/Helpers/TestData/**'];
const SVG_FILES = ['font-svg/*.svg'];
const FontsFilePath = 'src/assets/json';

// --------------------------------------------------------
// Copying Resources
// --------------------------------------------------------
gulp.task('resource-copy', function () {
    return gulp.src(RESOURCE_FILE)
        .pipe(gulp.dest('lib/assets/')) ;
});
gulp.task('export-icon-fonts', function () {
    let runTimestamp = Math.round(Date.now() / 1000);
    gulp.src(SVG_FILES)
        .pipe(iconfont({
            fontName: 'SignplifyFont', formats: ['ttf'], timestamp: runTimestamp
        }))
        .on('glyphs', (glyphs, options) => {
            let fuentes = {};
            glyphs.forEach((font, index) => {
                fuentes[font.name.replace(/\d{0,3}[-]/g, '')] = options.startUnicode + index;
            });
            String2JSON(FontsFilePath, 'SignplifyIcons.json', JSON.stringify(fuentes))
        })
        .pipe(gulp.dest('android/app/src/main/assets/fonts/'));
});
gulp.task('test-data-copy', function () {
    return gulp.src(TEST_RESOURCE_FILE)
        .pipe(gulp.dest('lib/Helpers/TestData/'));
});
// --------------------------------------------------------
// config task
// --------------------------------------------------------
gulp.task('default', ['watch', 'resource-copy', 'test-data-copy']);
function String2JSON(path, name, string) {
    const stream = source(name);
    stream.end(string);
    stream.pipe(gulp.dest(path));
}
gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("lib"));
});