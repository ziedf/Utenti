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
            let contenitore = $('<div></div>').addClass('col-md-4 mt-3');
            let row1 = $('<div></div>').addClass('row');
            let row2 = $('<div></div>').addClass('row');
            let row3 = $('<div></div>').addClass('row');
            
            let divnome = $('<div></div>').addClass('col-md-12 text-center');
            let nome = $('<h4></h4>').html(`${utente.name.title.charAt(0).toUpperCase()}${utente.name.title.slice(1)} 
                                            ${utente.name.first.charAt(0).toUpperCase()}${utente.name.first.slice(1)} 
                                            ${utente.name.last.charAt(0).toUpperCase()}${utente.name.last.slice(1)}`);

            let divimage = $('<div></div>').addClass('col-md-12 text-center');
            let image = $('<img></img>').addClass('img-fluid rounded-circle').attr('src',utente.picture.medium);
            
            image.appendTo(divimage);
            divimage.appendTo(row1);
            row1.appendTo(contenitore);
            
            nome.appendTo(divnome);
            divnome.appendTo(row2);
            row2.appendTo(contenitore);
            
            contenitore.appendTo(listautenti);
        });
    })













    

});