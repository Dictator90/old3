document.addEventListener('DOMContentLoaded', function (){
   const $consoleLog = document.querySelector('#consoleLog');
   const $alert = document.querySelector('#alert');
   const $prompt = document.querySelector('#prompt');

   $consoleLog.addEventListener('click', alert('dasdasd'));

});
