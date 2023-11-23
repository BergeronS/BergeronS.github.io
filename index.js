document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez les boutons kiosque
    var kiosks = document.querySelectorAll(".kiosk-button");
    var infoText = document.getElementById("info-text");
    var detailsContainer = document.getElementById("details-container");
  
    // Ajoutez un gestionnaire d'événements à chaque kiosque
    kiosks.forEach(function (kiosk) {
      kiosk.addEventListener("click", function () {
        // Inversez la couleur du kiosque cliqué
        toggleColor(kiosk);
  
        // Mettez à jour le texte d'information en fonction du kiosque cliqué
        updateInfoText(kiosk);
      });
    });
  
    // Fonction pour inverser la couleur
    function toggleColor(clickedKiosk) {
      // Parcours tous les kiosques
      kiosks.forEach(function (kiosk) {
        // Si le kiosque cliqué est différent, le rend transparent
        if (kiosk !== clickedKiosk) {
          kiosk.style.backgroundColor = "transparent";
        }
      });
  
      // Inverse la couleur du kiosque cliqué
      if (clickedKiosk.style.backgroundColor === "transparent" || clickedKiosk.style.backgroundColor === "") {
        clickedKiosk.style.backgroundColor = "rgba(255, 0, 0, 0.99)";
      } else {
        clickedKiosk.style.backgroundColor = "transparent";
      }
    }
  
    // Fonction pour mettre à jour le texte d'information
    function updateInfoText(clickedKiosk) {
      // Vérifiez si le kiosque cliqué est coloré
      if (clickedKiosk.style.backgroundColor === "rgba(255, 0, 0, 0.99)") {
        // Masquer le message par défaut
        infoText.style.display = "none";
  
        // Mettez à jour le texte en fonction du kiosque cliqué
        switch (clickedKiosk.id) {
          case "kiosk-1":
            detailsContainer.innerHTML = `
              <div class="kiosk-details">
              <h2>Nom du kioske</h2>
              <p>Informations sur le kioske...</p>
              <p>Peut etre des photos et leurs contacts ?</p>
              <!-- Ajoutez le contenu HTML et CSS spécifique à ce kiosque -->
              </div>
            `;
            break;
  
          case "kiosk-2":
            detailsContainer.innerHTML = `
              <div class="kiosk-details">
              <h2>Autre Kiosque</h2>
              <p>Informations pour l'autre Kiosque...</p>
              <!-- Ajoutez le contenu HTML et CSS spécifique à ce kiosque -->
              </div>
            `;
            break;
          
          case "kiosk-3":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 3</h2>
              <p>Informations pour kioske 3</p>
            </div>
            `;
            break;
          
          case "kiosk-4":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 4</h2>
              <p>Informations pour kioske 4</p>
            </div>
            `;
            break;
          
          case "kiosk-5":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 5</h2>
              <p>Informations pour kioske 5</p>
            </div>
            `;
            break;
          
          case "kiosk-6":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 6</h2>
              <p>Informations pour kioske 6</p>
            </div>
            `;
            break;
          
          case "kiosk-7":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 7</h2>
              <p>Informations pour kioske 7</p>
            </div>
            `;
            break;

          case "kiosk-8":
            detailsContainer.innerHTML = `
            <div class="kiosk-details">
              <h2>Kiosque 8</h2>
              <p>Informations pour kioske 8</p>
            </div>
            `;
            break;
  
          // Ajoutez d'autres cas pour chaque kiosque
  
          default:
            break;
        }
      } else {
        // Aucun kiosque n'est coloré, affichez le message par défaut
        detailsContainer.innerHTML = "";
        infoText.style.display = "block";
      }
    }
  });
  