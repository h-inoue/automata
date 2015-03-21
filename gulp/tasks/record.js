var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function() {
    var jsFiles = ['js/gnn/compatibility.js', 'js/gnn/util.js', 'js/gnn/uri.js',
                   'js/gnn/xhr.js', 'js/gnn/ui.js', 'js/gnn/file_browser.js',
                   'js/gnn/common.js', 'js/record/admin.js', 'js/record/model.js',
                   'js/record/keymap.js', 'js/record/view.js', 'js/record/tabs.js',
                   'js/record/app.js'];
    gulp.src(jsFiles)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/record'));
};
