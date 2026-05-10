let memory = 0; // Переменная для хранения числа в памяти (M)

// Научные функции
function scientific(type) {
    if (isOff) return;
    let val = parseFloat(screen.value);
    
    if (isNaN(val)) return;

    switch(type) {
        case 'sqrt': screen.value = Math.sqrt(val); break;
        case 'pow':  screen.value = Math.pow(val, 2); break;
        case 'sin':  screen.value = Math.sin(val * Math.PI / 180).toFixed(4); break;
        case 'cos':  screen.value = Math.cos(val * Math.PI / 180).toFixed(4); break;
    }
}

// Функции памяти (M+, M-, MRC)
function memAction(action) {
    if (isOff) return;
    let val = parseFloat(screen.value) || 0;

    if (action === 'M+') {
        memory += val;
        screen.value = "M SAVED";
        setTimeout(() => screen.value = val, 800);
    } else if (action === 'M-') {
        memory -= val;
        screen.value = "M SUB";
        setTimeout(() => screen.value = val, 800);
    } else if (action === 'MRC') {
        screen.value = memory; // Выводит сохраненное число
    }
}

function add(char) {
    if (isOff) return; // Если выключен, ничего не делать

    // Если нажата 5 СРАЗУ после ⌘
    if (screen.value === "⌘" && char === "5") {
        openSidePanel();
        return; // ВАЖНО: выходим из функции, чтобы 5 не печаталась
    }

    // Обычная логика печати
    if (screen.value === "0" || screen.value === "⌘" || screen.value.includes("MODE")) {
        screen.value = char;
    } else {
        screen.value += char;
    }
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    if (isOff) {
        clockElement.innerText = ""; // Скрываем время, если калькулятор выключен
    } else {
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
}






// Не забудь обновить проверку комбинации в основной функции add(char)
// Если ты уже добавил это в прошлом шаге, просто убедись, что она там есть:
// if (screen.value === "⌘" && char === "5") { openSidePanel(); return; }

