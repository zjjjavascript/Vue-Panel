function fnRecalcRem(){
  document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';
}
window.addEventListener('DOMContentLoaded', fnRecalcRem, false);
window.addEventListener('resize', fnRecalcRem, false);