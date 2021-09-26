var startTime =0;
var eBegin = document.getElementsByName('begin-date');
for(var item of eBegin){
  var beginCal = new PCalendar({
    target:item,
    date:new Date(2000,0,1),
    type:'hide',
    format:format,
    img:'/images/pc/pm/calendar.svg',
    callback:function(date,format){
      startTime = new Date(format);
    }
  });
}

function format(date){//MM/DD/YYYY
  var month = (date.getMonth()+1)<10?'0'+(date.getMonth()+1):getMonth()+1;
  var day = date.getDate()<10?'0'+date.getDate():date.getDate();
  return month+'/'+day+'/'+date.getFullYear();
}
