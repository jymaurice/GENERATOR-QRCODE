function generateQRCode() {
    var url = document.getElementById("urlInput").value;
    var urlError = document.getElementById("urlError");
    var color = document.getElementById("colorInput").value;
    var size = document.getElementById("sizeInput").value;
    var generateButton = document.getElementById("generateButton");
    
    var urlPattern = new RegExp(document.getElementById("urlInput").pattern);
    if (!urlPattern.test(url)) {
      urlError.textContent = "URL invalide. Veuillez saisir une URL valide.";
      return;
    }
    
    urlError.textContent = ""; // Effacer le message d'erreur précédent s'il existe
    
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: size,
      height: size,
      colorDark: color,
      colorLight: "#ffffff",
    });
    
    document.getElementById("qrcode").classList.add("show"); // Ajouter la classe "show" pour activer la transition
    
    generateButton.disabled = true; // Désactiver le bouton de génération
  }
  
  function downloadQRCode() {
    var qrcodeCanvas = document.getElementById("qrcode").getElementsByTagName("canvas")[0];
    if (!qrcodeCanvas) {
      return; // Quitter la fonction si le canvas du QR Code n'est pas trouvé
    }
    
    var downloadLink = document.createElement("a");
    downloadLink.href = qrcodeCanvas.toDataURL("image/png");
    downloadLink.download = "qrcode.png";
    downloadLink.click();
  }
  