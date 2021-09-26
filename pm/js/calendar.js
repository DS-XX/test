var startTime= 0;
var endTime =0;
var eBegin = document.getElementById("begin-date"),
  eEnd = document.getElementById("end-date");
var img = document.getElementById("calendar_img");
var beginCal = new PCalendar({
  target:eBegin,
  date:new Date(2000,0,1),
  type:"hide",
  format:format,
  img:"/images/pc/pm/calendar.svg",
  callback:function(date,format){
    startTime = new Date(format);
  }
});

var endCal = new PCalendar({
  target:eEnd,
  date:new Date(2017,0,6),
  type:"hide",
  format:format,
  img:"/images/pc/pm/calendar.svg",
  callback:function(date,format){
    endTime = new Date(format);
    if(startTime!= 0){
      between = parseInt(parseInt(endTime-startTime)/1000/3600/24/30);
      console.log(between);
      if(between>1){
        document.getElementById('TimeD').innerHTML=`Term: ${between} Months`
      }
    else{
        document.getElementById('TimeD').innerHTML=`Term: ${between} Month`
      }
    }
  }
});

function format(date){//MM/DD/YYYY
  var month = (date.getMonth()+1)<10?"0"+(date.getMonth()+1):getMonth()+1;
  var day = date.getDate()<10?"0"+date.getDate():date.getDate();
  return month+"/"+day+"/"+date.getFullYear();
}
