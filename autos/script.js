function calculateRental() {
    var carType = document.getElementById('carType').value; 
    var pricePerDay = document.getElementById('pricePerDay').value; 
    var days = document.getElementById('days').value; 
    var contentOverlay = document.querySelector('.content-overlay'); 
    var backgroundColor = "";
    
    if (pricePerDay && days) {
        var totalPrice = pricePerDay * days; 

        if (days >= 1 && days <= 2) {
            backgroundColor = "rgba(255, 165, 0, 0.8)";  
        } else if (days >= 3 && days <= 5) {
            backgroundColor = "rgba(255, 255, 0, 0.7)"; 
        } else if (days >= 6 && days <= 10) {
            backgroundColor = "rgba(0, 128, 0, 0.7)";  
        } else if (days > 10) {
            backgroundColor = "rgba(0, 0, 255, 0.6)"; 
        }

        contentOverlay.style.backgroundColor = backgroundColor;

        var resultDiv = document.getElementById('priceResult');
        resultDiv.innerHTML = "El alquiler por " + days + " días es de " + totalPrice + " COP.";

        var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'));
        switch(carType) {
            case 'bmw':
                carousel.to(0); 
                break;
            case 'mercedes':
                carousel.to(1); 
                break;
            case 'twingo':
                carousel.to(2); 
                break;
            case 'megane':
                carousel.to(3); 
                break;
            case 'chevrolet':
                carousel.to(4); 
                break;
            default:
                console.log("Carro no encontrado");
                break;
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}


