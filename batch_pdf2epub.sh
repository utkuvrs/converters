#!/bin/bash

# Check if Calibre is installed
if ! command -v ebook-convert &> /dev/null; then
    echo "Calibre is not installed. Please install Calibre first."
    exit 1
fi

# Check if folder path is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <folder_path>"
    exit 1
fi

folder_path="$1"

# Check if folder exists
if [ ! -d "$folder_path" ]; then
    echo "Folder not found: $folder_path"
    exit 1
fi

# Function to convert PDF to EPUB
convert_pdf_to_epub() {
    local pdf_file="$1"
    local output_file="${pdf_file%.pdf}.epub"
    
    # Convert PDF to EPUB
    ebook-convert "$pdf_file" "$output_file" &
    
    echo "Conversion initiated for: $pdf_file"
}

# Iterate through PDF files in the folder
for pdf_file in "$folder_path"/*.pdf; do
    if [ -f "$pdf_file" ]; then
        convert_pdf_to_epub "$pdf_file"
    fi
done

echo "Conversion process initiated for all PDF files in the folder."
# https://chat.openai.com/c/62c303a7-cebd-4731-a5d2-91f520f42436