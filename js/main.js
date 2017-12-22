$(function(){
  var duration = 500;
  $("button:nth-child(-n+4)").on('mouseover',function(){
    $(this).stop(true).animate({
      backgroundColor:'#ae64ea',
      color:'#fff'
    },duration);
  });
  $("button:nth-child(-n+4)").on('mouseout',function(){
    $(this).stop(true).animate({
      backgroundColor:'#fff',
      color:'#ffa68d'
    },duration);
  });
  $("button:nth-child(n+5):nth-child(-n+8)").on('mouseover',function(){
    $(this).stop(true).animate({
      borderWidth:'8px',
      color:'#968782'
    },duration);
  })
  .on('mouseout',function(){
    $(this).stop(true).animate({
      borderWidth:'0px',
      color:'#ffa68d'
    },duration);
  });
 $("#wrapper button:nth-child(n+9)").on('mouseover',function(){
   $(this).find('>span').stop(true).animate({
     width:'100%'
   },duration,'easeOutCirc');
 })
 .on('mouseout',function(){
   $(this).find('>span').stop(true).animate({
     width:'0%'
   },duration,'easeOutCirc');
 });
 $(".bounce button").on('mouseover',function(){
   $(this).effect('bounce',{times:3}, 500);
 });
 $(".bounce button").on('mouseout',function(){
   $(this).stop(true);
 });
});
