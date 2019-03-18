// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//
gulp.task('default',function(done){
    gulp.src(['./lib/jquery.min.js','./lib/template7.min.js','./src/loader.js','./src/func.js'])
    .pipe(concat('pdl_lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    //告诉gulp 任务完成
    done()
})