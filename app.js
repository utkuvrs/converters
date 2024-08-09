const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Directory containing PDFs
const pdfDir = './pdfs';
// Output directory for EPUBs
const outputDir = './epubs';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert a PDF to EPUB
function convertPdfToEpub(pdfPath, epubPath) {
    exec(`ebook-convert "${pdfPath}" "${epubPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error converting ${pdfPath}:`, error);
            return;
        }
        console.log(`Converted ${pdfPath} to ${epubPath}`);
    });
}

// Read all PDF files in the directory
fs.readdir(pdfDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.pdf') {
            const pdfPath = path.join(pdfDir, file);
            const epubPath = path.join(outputDir, path.basename(file, ext) + '.epub');
            convertPdfToEpub(pdfPath, epubPath);
        }
    });
});
