


var io = io.connect();



$('document').ready(function(){


$(".stop").click(function()
  {
    io.emit('rutina:rutina',
    {
      valor : 'encendido rutina' 
    });
  });


$(".flecha-arriba").click(function()
  {
    io.emit('rutina2:rutina2',
    {
      valor : 'encendido rutina' 
    });
  });


$(".flecha-abajo").click(function()
  {
    io.emit('rutina3:rutina3',
    {
      valor : 'encendido rutina' 
    });
  });


$(".flecha-izquierda").click(function()
  {
    io.emit('rutina4:rutina4',
    {
      valor : 'encendido rutina' 
    });
  });


$(".flecha-derecha").click(function()
  {
    io.emit('rutina5:rutina5',
    {
      valor : 'encendido rutina' 
    });
  });









	
});