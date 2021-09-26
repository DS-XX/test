function autoCenter(el){
  //获取可见窗口大小
  var bodyW = document.documentElement.clientWidth;
  var bodyH = document.documentElement.clientHeight;
  //获取对话框宽、高
  var elW = el.offsetWidth;
  var elH = el.offsetHeight;
  el.style.left = (bodyW - elW)/2 + 'px';
};
function modal(add_new,my_modal,modal_out){
//获取弹窗按钮
var add_new=document.getElementById(add_new);
var my_modal=document.getElementById(my_modal);
var modal_out = document.getElementById(modal_out);
//按钮绑定事件
//获取弹窗
my_modal.style.display="flex";
modal_out.style.display="flex";
autoCenter(my_modal);
// document.documentElement.style.overflow="hidden";

window.onclick=function (event) {
  if(event.target == modal_out){
  my_modal.style.display="none";
  modal_out.style.display="none";
  document.documentElement.style.overflow="auto";
  }
}
//  跟随窗口的变换变换位置
window.onresize = function(){
  autoCenter(my_modal);
}
}
