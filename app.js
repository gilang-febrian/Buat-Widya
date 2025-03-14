
document.title = 'Mau gk Maafin Aku ?'

document.querySelector('.say-yes').addEventListener('click', ev => {
  document.querySelector('#slide-1').style.display = 'none'
  document.querySelector('#slide-2').style.display = 'block'
  document.title = 'yey dimaafin'
  document.querySelector('#keluarSana').style.display = 'block'
})

document.querySelector('.next-button').addEventListener('click', ev => {
  document.querySelector('#slide-2').style.display = 'none'
  document.querySelector('#slide-3').style.display = 'block'
  document.title = 'HBD widya'
  setTimeout(() => {
    document.querySelector('#byebye').style.display = 'block'
  }, 2000)
})

document.querySelectorAll('.say-no').forEach((el, i) => {
  el.id = 'no-' + i
  el.addEventListener('mouseover', ev => {
    const showId = ev.target.id == 'no-0' ? 'no-1' :
                    ev.target.id == 'no-1' ? 'no-2' : 'no-0'
    removeStyleBtnNo()
    document.querySelector('#'+showId).style.display = 'block'
  })

  if (i != 0) {
    el.style.display = 'none'
  }
})

function removeStyleBtnNo () {
  document.querySelectorAll('.say-no').forEach(el => {
    el.style.display = 'none'
  })
}

window.onload = function () {
  document.body.style.display = 'grid'
}

document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".next-button");
    const audio = document.getElementById("birthdayMusic");

    if (nextButton && audio) {
        nextButton.addEventListener("click", function () {
            audio.play().catch(error => {
                console.log("Autoplay tidak diperbolehkan, pengguna harus berinteraksi dengan halaman dulu.", error);
            });
        });
    }

    // Fungsi untuk menghentikan musik
    function stopMusic() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    // Hentikan musik saat kembali ke slide sebelumnya
    document.getElementById("slide-1").addEventListener("click", stopMusic);
});
