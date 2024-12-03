function abrirCriarTreino() {
    // Redirecionar para a página de criação de treino
    window.location.href = 'criar-treino.html';
}

// Função para o dropdown do usuário
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}