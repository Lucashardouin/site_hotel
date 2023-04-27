function changeListContent(buttonId) {

    var list = document.getElementById('list');
    var buttons = document.getElementsByClassName('button');

    list.innerHTML = '';

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    switch (buttonId) {
        case 1:
            list.innerHTML = '<li>Station Kléber à 200 mètres de l’hôtel : Ligne 6</li><li>Station Charles de Gaulle / Etoile 400 mètres : Ligne 1 RER</li><li>Station Iéna 800 mètres : Ligne 9</li><li>Station Victor Hugo 700 mètres : Ligne 2</li>';
            document.getElementById('button1').classList.add('active');
            break;
        case 2:
            list.innerHTML = "<p>Arrêts avenue Kléber :</p><li>Trocadéro / Gare de l'Est (n° 30)</li><li>Porte de Saint Cloud / Opéra (n° 22)</li>";
            document.getElementById('button2').classList.add('active');
            break;
        case 3:
            list.innerHTML = "<p>Par le périphérique Nord ou Sud : périphérique jusqu'à la Porte Dauphine, avenue Foch, direction Place de l’Etoile, puis Avenue Kléber, avenue des Portugais deuxième à gauche et rue La Pérouse première à droite.</p><br><br><p>Coordonnées GPS : Latitude : 48.8703941 / Longitude : 2.2937888</p>";
            document.getElementById('button3').classList.add('active');
            break;
        case 4:
            list.innerHTML = `<p>Aéroport international Roissy Charles de Gaulle :</p><li>Durée du trajet : entre 30 et 45 minutes</li><li>Possibilité de se rendre en taxi depuis l’aéroport, ou par 'Bus Direct' (arrêt Etoile Champs-Elysées), informations: www.lebusdirect.com</li><br><p>Aéroport d'Orly :</p><li>Durée du trajet environ 30 minutes</li><li>Possibilité de se rendre en taxi depuis l'aéroport, ou par 'Bus Direct' (arrêt Etoile Champs-Elysées), informations: www.lebusdirect.com</li><br><p>Aéroport le Bourget :</p><li>Durée du trajet entre 30 et 40 minutes.</li><li>Pour plus d’informations : www.aeroport.fr</li><li>Transfert aéroport en limousine</li><br><p>Pour toutes réservations, contactez-nous : <a href="mailto:concierge@majestic-hotel.com" class="links">concierge@majestic-hotel.com</a></p>`;
            document.getElementById('button4').classList.add('active');
            break;
        case 5:
            list.innerHTML = "<p>6 gares SNCF :</p><li>Gare du Nord (Eurostar/Thalys)</li><li>Gare de Bercy</li><li>Gare d'Austerlitz</li><li>Gare de Lyon (TGV Méditérranée/Suisse/Italie)</li><li>Gare Montparnasse (TGV Atlantique/Sud-Ouest)</li><li>Gare Saint-Lazare (Normandie)</li><li>Gare de l'Est (Allemagne/Orient Express)</li>";
            document.getElementById('button5').classList.add('active');
            break;
        default:
            document.getElementById('button1').classList.add('active');
            break;
    }
}
