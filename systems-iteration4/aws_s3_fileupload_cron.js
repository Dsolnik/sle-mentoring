var AWS = require('aws-sdk'),
    fs = require('fs'),
    cron = require('node-cron')

// For dev purposes only
AWS.config.update({ accessKeyId: '...', secretAccessKey: '...' });

// reg ex to match - all .txt files
var re = /\.txt$/;

var s3 = new AWS.S3()

function read(file) {
	fs.readFile(file, function (err, data) {
		if (err) { throw err }

		// Buffer Pattern; how to handle buffers; straw, intake/outtake analogy
		var base64data = new Buffer(data, 'binary');

		s3.putObject({
		   'Bucket': 'noonebetterhaventakenthisbucketnname',
		    'Key': file,
		    'Body': base64data,
		    'ACL': 'public-read'
		 }, function (resp) {
		    console.log(arguments);
		    console.log('Successfully uploaded, ', file)
		})
	})
}


cron.schedule('*/1 * * * *', function(){
	// ensure that this file is in the directory of the files you want to run the cronjob on
	fs.readdir("/Users/stevenle/Documents/aws-nodejs", function(err, files) {
		if (err) {
			console.log( "Could not list the directory.", err)
			process.exit( 1 )
		}

		var matches = files.filter( function(text) { return re.test(text) } )
		console.log("These are the files you have", matches)
		var numFiles = matches.length

		if ( numFiles ) {
			// Read in the file, convert it to base64, store to S3
			for( i = 0; i < numFiles; i++ ) {
				read(matches[i])
			}
		}

	})
})





