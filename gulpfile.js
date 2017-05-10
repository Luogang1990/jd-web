/**
 * Created by Administrator on 2017/5/9.
 */
var gulp=require("gulp");
var less=require("less");
var $ = require('gulp-load-plugins')();//加载插件
/*把less文件编译成CSS*/
 gulp.task("less",function(){
     return gulp.src("APP/styles/*.less")
         .pipe($.less())
         .pipe(gulp.dest("dist/css/"));
 })
gulp.task("dist",function(){
    gulp.watch("APP/styles/*.less",["less"])
})
/*压缩图片*/
gulp.task('images', function() {
    return gulp.src('../img/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});