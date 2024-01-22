import React from 'react';

const PDFDownloadButton = () => {
  const handleDownload = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfPath = 'path/to/your/file.pdf';

    // Create a virtual anchor element
    const a = document.createElement('a');

    // Set the href attribute to the path of the PDF file
    a.href = pdfPath;

    // Set the download attribute to specify the filename for the downloaded file
    a.download = 'downloaded_file.pdf';

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default PDFDownloadButton;
