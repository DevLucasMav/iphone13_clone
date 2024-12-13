const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const button = e.target.closest("li");

        // Remover a seleção anterior
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // Adicionar a seleção ao botão atual
        button.querySelector(".color").classList.add("selected");

        // Alterar a imagem
        const id = button.id;
        image.src = `img/iphone_${id}.jpg`;

        // Animação de troca
        image.classList.add("changing");

        setTimeout(() => {
            image.classList.remove("changing");
        }, 500); 
    });
});
