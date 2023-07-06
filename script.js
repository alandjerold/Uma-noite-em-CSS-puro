function init(){
    var numeroAleatorio = 5000;

    setTimeout(function(){
      carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro(){
      setTimeout(carregarMeteoro, numeroAleatorio);
      numeroAleatorio = getRandomArbitrary(5000, 10000);
       
      setTimeout(function(){
        document.getElementsByClassName('meteoro01')[0].innerHTML = "";
      }, 1000);
    }

}
