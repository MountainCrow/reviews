require('dotenv').config();

module.exports = function(grunt) {
  grunt.initConfig({
    // aws: grunt.file.readJSON("aws-keys.json"),
    aws_s3: {
      options: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-west-1"
      },
      dist: {
        options: {
          bucket: "fjallcrowreviews"
        },
        files: [
          {
            expand: true,
            cwd: "public",
            src: ["bundle.js"],
            dest: "/scripts"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-aws-s3");

  grunt.registerTask("deploy", "aws_s3");
};