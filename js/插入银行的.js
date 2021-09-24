function insert_bank(){
    var bank_img = new Array('td','rbc','bmo','scotia','cibc','hsbc','vancity','coast','national','cwb');
    var a = document.getElementById('banks');
    console.log(a);
    for(var i=0 ;i<3;i++){
      a.innerHTML+="<div class='select_bank'></div>";
      for(var j=0;j<4;j++){
        var b = document.getElementsByClassName('select_bank')[i];
        if(i*4+j<bank_img.length){
          b.innerHTML+=`<input type='radio' name=option_bank /><div><img src='./images/pc/pm/${bank_img[i*4+j]}.png'/></div>`;
        }
        else if(i==2 && j==3){}
        else{
          b.innerHTML+=`<input type='radio' name=option_bank />other`;
        }
      }
    }
}