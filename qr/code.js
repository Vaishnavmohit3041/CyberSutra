let html5QrcodeScanner;

function startCamera() {
  document.getElementById('reader').style.display = 'block';
  document.getElementById('result').style.display = 'none'; // Hide result initially
  if (html5QrcodeScanner) {
    html5QrcodeScanner.clear();
  }
  html5QrcodeScanner = new Html5Qrcode("reader");
  html5QrcodeScanner.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      document.getElementById('result').innerHTML = `<strong>Scanned Result:</strong><br> ${decodedText}`;
      document.getElementById('result').style.display = 'block'; // Show result
      html5QrcodeScanner.stop();
    },
    (errorMessage) => {
      // console.log(errorMessage);
    }
  );
}

function triggerFileInput() {
  document.getElementById('file-input').click();
}

function scanFromFile() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  if (!file) {
    alert("Please upload an image file first.");
    return;
  }

  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.scanFile(file, true)
    .then((decodedText) => {
      document.getElementById('result').innerHTML = `<strong>Scanned Result:</strong><br> ${decodedText}`;
      document.getElementById('result').style.display = 'block'; // Show result
    })
    .catch(err => {
      document.getElementById('result').innerHTML = `<strong>No QR code found.</strong>`;
      document.getElementById('result').style.display = 'block'; // Show result even if no QR code is found
    });
}