//telling grunt to run out typescript

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ts');

  grunt.initConfig({
    ts: {
      main: {
        // src:['typescript/main.ts'],
        src:['typescript/*.ts'],

        //dest:'javascript/'
        //to combine all the javascript output files
        out: 'javascript/main.js'
      }
    }
  });

  grunt.registerTask('default',['ts'])
}
