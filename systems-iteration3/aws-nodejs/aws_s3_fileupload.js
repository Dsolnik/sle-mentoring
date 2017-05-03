var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: '...', secretAccessKey: '...' });

// Read in the file, convert it to base64, store to S3
fs.readFile('test.txt', function (err, data) {
  if (err) { throw err; }
  

  // Buffer Pattern; how to handle buffers; straw, intake/outtake analogy
  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'noonebetterhaventakenthisbucketnname',
    Key: 'test2.txt',
    Body: base64data,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});
