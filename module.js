// Import file system module
const fs = require('fs');

// Create folder if it does not exist
if (!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Folder created');
        }
    });
}

// Write file
fs.writeFile('./docs/file.txt', 'Welcome to my page', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('File Written');
    }
});

// Read file
if (fs.existsSync('./docs/file.txt')) {
    fs.readFile('./docs/file.txt', (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(data.toString());
        }
    });
}