$(function(){

    //recupero lista utenti con ajax
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json'
    })
    .then(function(data) {
        let utenti = data.results;
        let listautenti = $('#listautenti')
        utenti.forEach(utente => {
            let contenitore = $('<div></div>').addClass('col-md-4');
            let card = $('<div></div>').addClass('mt-3 utente p-5');
            
            let row1 = $('<div></div>').addClass('row');
            let row2 = $('<div></div>').addClass('row');
            let row3 = $('<div></div>').addClass('row');
            
            let divnome = $('<div></div>').addClass('col-md-12 text-center');
            
            let nomecompleto = `${utente.name.title.charAt(0).toUpperCase()}${utente.name.title.slice(1)} 
            ${utente.name.first.charAt(0).toUpperCase()}${utente.name.first.slice(1)} 
            ${utente.name.last.charAt(0).toUpperCase()}${utente.name.last.slice(1)}`;

            let nome = $('<h4></h4>').html(nomecompleto);

            let divimage = $('<div></div>').addClass('col-md-12 text-center');
            let image = $('<img></img>').addClass('img-fluid rounded-circle image').attr('src',utente.picture.medium);

            let divicona1 = $('<div></div>').addClass('col-md-4 text-center');
            let divicona2 = $('<div></div>').addClass('col-md-4 text-center');
            let divicona3 = $('<div></div>').addClass('col-md-4 text-center');

            let indirizzo = `${utente.location.street} ${utente.location.city.charAt(0).toUpperCase()}${utente.location.city.slice(1)}`;
            let telefono = `${utente.cell}`;
            let email = `${utente.email}`;
            
            let icona1 = $('<i></i>').addClass('fas fa-map-marker').css('fontSize', '24px').hover(function () {
                nome.html(indirizzo);
            }).mouseleave(function(){
                nome.html(nomecompleto)
            });
            let icona2 = $('<i></i>').addClass('fas fa-mobile-alt').css('fontSize', '24px').hover(function () {
                nome.html(telefono);
            }).mouseleave(function () {
                nome.html(nomecompleto)
            });
            let icona3 = $('<i></i>').addClass('fas fa-envelope').css('fontSize', '24px').hover(function () {
                nome.html(email);
            }).mouseleave(function () {
                nome.html(nomecompleto)
            });
            
            
            image.appendTo(divimage);
            divimage.appendTo(row1);
            row1.appendTo(card);
            
            nome.appendTo(divnome);
            divnome.appendTo(row2);
            row2.appendTo(card);

            icona1.appendTo(divicona1);
            divicona1.appendTo(row3);
            icona2.appendTo(divicona2);
            divicona2.appendTo(row3);
            icona3.appendTo(divicona3);
            divicona3.appendTo(row3);
            row3.appendTo(card);

            card.appendTo(contenitore);
            contenitore.appendTo(listautenti);
        });
    })













    

});