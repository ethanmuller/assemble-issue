var assemble = require('assemble');

assemble.task('red', function(){
  assemble.src('templates/red/*.hbs')
    .pipe(assemble.dest('build/red-only/'));
});

assemble.task('blue', function(){
  assemble.src('templates/blue/*.hbs')
    .pipe(assemble.dest('build/blue-only/'));
});

assemble.task('default', ['red', 'blue']);
