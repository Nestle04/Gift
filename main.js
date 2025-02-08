document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
    }
});

function checkPassword() {
    const input = document.getElementById('password').value;
    if (input === "09022005") {
        document.getElementById('giftBox').classList.add('open');
        setTimeout(() => {
            document.querySelector(".congr").classList.toggle("hide");
        }, 1000);
    } else {
        alert("Неверный пароль!");
    }
}