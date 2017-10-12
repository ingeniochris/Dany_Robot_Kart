var express = require('express.io');
var app = express().http().io();
var five = require ("johnny-five");
var PiIO = require ('pi-io');





//Se inicia el servidor
              app.use(express.static("public"));

              app.get("/",function(req,res)
              {   
                  res.render("index");
                
              });app.listen(8080);




var board = new five.Board({
io: new PiIO()

});
board.on("ready", function() 
{

 // keypress(process.stdin);
  console.log("Placa lista.");
    
  //process.stdin.on("keypress", function(ch, key)
  //{

    var pin1 = new five.Led('GPIO17');
    var pin2 = new five.Led('GPIO18');
    var pin3 = new five.Led('GPIO19');
    var pin4 = new five.Led('GPIO16');

     
 

        app.io.route('rutina',
        {
              rutina:function(req)
                      
              {

             
                  pin1.off();
                  pin2.off();
                  pin3.off();
                  pin4.off();

                  console.log("\nstop");

                 
                      
                   
                        
            }
        });


        app.io.route('rutina2',
        {

               rutina2:function(req)
               {

                  pin1.off();
                  pin2.on();
                  pin3.on();
                  pin4.off();

                  console.log("\nAdelante");

              
                      
                   

               } 



        });


        app.io.route('rutina3',
        {

          rutina3:function(req)
          {
                  pin1.on();
                  pin2.off();
                  pin3.off();
                  pin4.on();

                  console.log("\nAtras");

              


          }
        });

    app.io.route('rutina4',
        {

          rutina4:function(req)
          {
                  pin1.on();
                  pin2.off();
                  pin3.on();
                  pin4.off();

                  console.log("\nIzquierda");
                  
                


          }
        });


    app.io.route('rutina5',
        {

          rutina5:function(req)
          {
                      pin1.off();
                      pin2.on();
                      pin3.off();
                      pin4.on();

                      console.log("\nDerecha");

                  


          }
        });











            /*if (key.name ==="space"){
              pin1.off();
              pin2.off();
              pin3.off();
              pin4.off();

              console.log("\nstop");
            }



          /*  if (key.name ==="up"){


                pin1.off();
              pin2.on();
              pin3.on();
              pin4.off();

              console.log("\nAdelante");
            }

            if (key.name ==="down"){
                pin1.on();
              pin2.off();
              pin3.off();
              pin4.on();

              console.log("\nAtras");
            }

            if (key.name ==="left"){
            

                 pin1.on();
              pin2.off();
              pin3.on();
              pin4.off();

              console.log("\nIzquierda");
            }

                if (key.name ==="right"){
                 

                  pin1.off();
                  pin2.on();
                  pin3.off();
                  pin4.on();

                  console.log("\nDerecha");
                }*/
  // });

});
module.exports = app;
// mensaje que se muestra por consola mientras se espera a que se inicie la placa
console.log("\nEsperando a que inicialice el dispositivo...");
