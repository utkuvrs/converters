# PDF to EPUB Converter

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This Node.js project converts PDFs to EPUB format using the Calibre CLI tool `ebook-convert`. It scans a directory of PDFs and outputs the converted EPUBs into a separate directory.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What you need to install before running the project:

- **Node.js** (v14 or higher)
- **Calibre** (to use `ebook-convert`)

You can install Node.js from [here](https://nodejs.org/), and Calibre from [here](https://calibre-ebook.com/download).

### Installing

Follow these steps to set up the project on your local machine:

1. **Clone & Navigate to the repository:**

```bash
git clone https://github.com/your-username/pdf-to-epub-converter.git
cd pdf-to-epub-converter
```

2. Install dependencies:

```bash
npm install
```

3. Ensure Calibre's ebook-convert is in your system's PATH.

```bash
ebook-convert --version
```

4. Create the directories for PDFs and EPUBs (if they don't exist)

```bash
mkdir pdfs epubs
```

5. Add PDF files to the pdfs directory.

```bash
node app.js
```
