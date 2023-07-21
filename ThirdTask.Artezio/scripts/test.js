// Тестовый код с запросом на сервер
fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => {
        console.log('Получен ответ от серверной части: ', data)

        // Добавление ответа в элемент <main> на главной странице в виде заголовка h1
        const h1 = document.createElement('h1');
        h1.textContent = data;

        document.querySelector('main').append(h1);
    })
    .catch(error => {
        console.error('Ошибка отправки тестового запроса на сервер: ', error);
    });
