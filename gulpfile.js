var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss') //Ruta de la carpeta sass apuntando a los archivos `.scss`
        .pipe(sass().on('error', sass.logError)) //Compila los archivos `.scss` y muestra posibles errores
        .pipe(gulp.dest('./source/css'))//Carpeta donde se guardaran los archivos `.css` compilado
        .pipe(notify("Task SCSS Completed!")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
});

//Tarea por defecto
gulp.task('default',['watch', 'sass']);