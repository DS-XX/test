function change_edit(){
    var change = document.getElementsByName('change');
    var background = document.getElementsByClassName('left')[0].children;
    var distribute_edit = document.getElementById('distribute_edit');
    var next = document.getElementById('distribute_next');
    var set_input = document.getElementsByName('set_input');
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