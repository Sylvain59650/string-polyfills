var gulp = require('gulp');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');


gulp.task("String.min.js", () => {
  return gulp.src([
      "sources/String.js"
    ])
    .pipe(concat("String.min.js"))
    .pipe(uglify())
    .on('error', function(err) { console.error(err.toString()); })
    .pipe(gulp.dest("./distrib"))
});

gulp.task('default', ["String.min.js"]);


gulp.task('all', ['default']);