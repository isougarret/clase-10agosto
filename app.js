url = 'http://mindicador.cl/api'

/*$.getJSON('http://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    console.log(dailyIndicators)
}).fail(function() {
    console.log('Error al consumir la API!');
});*/

$.ajax({
    url: url
  }).done(function(data){
  	$('#dolar').text(parseInt(data.dolar.valor))
  	$('#euro').text(parseInt(data.euro.valor))
  	$('#utm').text(parseInt(data.utm.valor))
  	$('#uf').text(parseInt(data.uf.valor))
    console.log(parseInt(data.dolar.valor));
  })

  $('#cl-button').on('click',function(e){
  	e.preventDefault();
  	var valor = $('#peso-cl').val()

  	var eu = valor/$('#euro').html()
  	var us = valor/$('#dolar').html()

  	$('#conv-euro').text(parseInt(eu))
  	$('#conv-dolar').text(parseInt(us))
  	$('#escondido-1').removeAttr('hidden')

  })

  $('#us-button').on('click',function(e){
  	e.preventDefault();
  	var valor = $('#dolar-us').val()
  	var us = $('#dolar').html()

  	var peso = valor * us

  	$('#conv-peso').text(parseInt(peso))
  	$('#escondido-2').removeAttr('hidden')
  })