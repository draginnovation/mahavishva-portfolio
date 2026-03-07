const fs = require('fs');
const path = require('path');
const { fromPath } = require('pdf2pic');

const dir = path.join(__dirname, 'public', 'certificates');

const options = {
    density: 300,
    saveFilename: "untitled",
    savePath: dir,
    format: "jpeg",
    width: 2550,
    height: 3300
};

fs.readdirSync(dir).forEach(file => {
    if (path.extname(file).toLowerCase() === '.pdf') {
        const filePath = path.join(dir, file);
        const fileName = path.parse(file).name;
        
        options.saveFilename = fileName;
        const storeAsImage = fromPath(filePath, options);
        storeAsImage(1).then((resolve) => {
            console.log("Successfully converted: " + resolve.name);
        }).catch((err) => {
            console.error("Failed to convert " + file + ":", err);
        });
    }
});
