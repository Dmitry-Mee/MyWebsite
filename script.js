document.getElementById("car").addEventListener("click", function() {
    let smokeContainer = document.getElementById("smoke-container");
    smokeContainer.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let smoke = document.createElement("div");
        smoke.classList.add("smoke");
        smoke.style.left = `${Math.random() * 40}px`;  // Для вариативности
        smoke.style.bottom = `${Math.random() * 20}px`; // Если нужно добавить случайное движение по вертикали
        smoke.style.animationDelay = `${i * 0.2}s`;
        smokeContainer.appendChild(smoke);
    }
});
document.getElementById("car").addEventListener("click", function() {
    this.classList.add("move-left"); // Добавляем класс для анимации
});
