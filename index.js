let express = require('express');
let serveIndex = require('serve-index');
let path = require('path');

let app = express();

app.use(express.static('./public/course_files_export'));
app.use('/', serveIndex('./public/course_files_export'));

app.listen(process.env.PORT || 3000, () => {
	console.log("listening on ", (process.env.PORT || 3000));
});