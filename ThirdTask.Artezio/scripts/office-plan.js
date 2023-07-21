const floorPlanSvg = document.querySelector('.office-plan');

// Делегирование события
// Прослушиваем клик через всплытие на родительский <SVG> элемент
floorPlanSvg.addEventListener('click', e => {
    const { target } = e;

    // Если клик был на элемент <path class="workspace">
    if (target.classList.contains('workspace')) {
        // Извлекаем номер рабочего места из data-атрибута
        const workspaceNumber = Number(target.dataset.workspace);
        // Устанавливаем текущее место как выбранного
        // У предыдущего активного рабочего места удаляем класс "active", а у текущего элемент - добавляем
        document.querySelectorAll('.workspace.active').forEach(el => el.classList.remove('active'));
        target.classList.add('active');

        showWorkspaceInfo(workspaceNumber);
    }
});

function showWorkspaceInfo(number) {
    const workspaceInfoEl = document.querySelector('.workspace-info');
    workspaceInfoEl.style.display = 'block';

    // Показываем номер выбранного рабочего места
    workspaceInfoEl.querySelector('.workspace-info__number').textContent = number;

    // TODO: Получить данные о сотруднике на выбранном рабочем месте
    // TODO: Отобразить данные о сотруднике в HTML-элементах

    // -------------------------- //

    // TODO: Обработать ситуацию, когда выбранного рабочее место не занято
}
