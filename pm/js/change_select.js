function change_select(change,left){
  var change = document.getElementsByName(change);
  var background = document.getElementsByClassName(left)[0].children;
  for(let i of background){
    i.onclick=function(){
      i.className='select';
      var index = 0;
      for(let x of background){
        if(x == i){
          change[index].style.display = 'flex';
          for(let y of change){
            if(change[index] == y)
            continue;
            y.style.display = 'none';
          }
          continue;
        }
        index++;
        x.className='';
      }
    }
  }

}
