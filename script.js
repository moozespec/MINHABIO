//*código para o gio em tempo real no rodape*//
  const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};
const date = new Intl.DateTimeFormat([], options);
console.log(date.format(new Date()));


$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});