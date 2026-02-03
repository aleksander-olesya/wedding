// Проверяем Telegram Web App
if (window.Telegram.WebApp) {
    Telegram.WebApp.ready(); // Сигнал Telegram, что мини-апп готов
}

document.getElementById('rsvpButton').addEventListener('click', () => {
    alert("Спасибо за ответ! Мы вас ждем 🎉");
    // Здесь можно отправлять данные на сервер через fetch()
});
