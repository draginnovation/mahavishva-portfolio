const fs = require('fs');
const path = require('path');
const poppler = require('pdf-poppler');

const dir = path.join(__dirname, 'public', 'certificates');

async function convertPdfs() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (path.extname(file).toLowerCase() === '.pdf') {
            const filePath = path.join(dir, file);
            const fileName = path.parse(file).name;
            
            const opts = {
                format: 'jpeg',
                out_dir: dir,
                out_prefix: fileName,
                page: 1,
                scale: 1024
            };

            console.log(`Converting ${file}...`);
            try {
                await poppler.convert(filePath, opts);
                console.log(`Success: ${file}`);
            } catch (err) {
                console.error(`Failed: ${file}`, err);
            }
        }
    }
}

convertPdfs();
