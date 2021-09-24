function change_background(name,className){
    //点击了add之后，默认选择personal，选择后会改变其背景颜色
          var a = document.getElementsByName(name);
          var target = document.getElementsByClassName(className);
          a[0].checked = true;
          target[0].style.backgroundColor = "#EEF5FF";
          for( var i=0;i<a.length;i++){
            a[i].onclick = (function(obj,i){
              return function(){
                for(var j=0;j<target.length;j++){
                    if(j==i){
                        continue;
                  }
                  else{
                    target[j].style.backgroundColor = "#FFFFFF";
                  }
              }
              target[i].style.backgroundColor = "#EEF5FF";;
            }
          })(a[i],i);
        }
    }