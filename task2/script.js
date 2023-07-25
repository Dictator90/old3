const action = {
   alert: {
      consoleLog: () => alert('Пример для вывода сообщщений в веб-консоль'),
      alert: () => alert('Пример для вывода на экран диалоговое окно с опциональным сообщением и кнопкой OK'),
      prompt: () => alert('Пример для вывода на экран модальное окно c полем ввода и текстом-пояснением'),
   }
}

document.addEventListener('DOMContentLoaded', function (){
   const $consoleLog = document.querySelector('#consoleLog');
   const $alert = document.querySelector('#alert');
   const $prompt = document.querySelector('#prompt');

   $consoleLog.addEventListener('click', action.alert.consoleLog);
   $alert.addEventListener('click', action.alert.alert);
   $prompt.addEventListener('click', action.alert.prompt);
});
