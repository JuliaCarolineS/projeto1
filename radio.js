<script>
        const audio = document.getElementById('audio');
        const prevButton = document.getElementById('prevButton');
        const playPauseButton = document.getElementById('playPauseButton');
        const nextButton = document.getElementById('nextButton');

        const musicas = ['musica1.mp3', 'musica2.mp3', 'musica3.mp3']; // Adicione aqui as URLs das suas músicas
        let musicaAtual = 0;
        let isPlaying = false;

        function tocarMusica(index) {
            if (index >= 0 && index < musicas.length) {
                musicaAtual = index;
                audio.src = musicas[musicaAtual];
                audio.play();
                isPlaying = true;
                playPauseButton.textContent = '⏸️';
            }
        }

        prevButton.addEventListener('click', () => {
            musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
            tocarMusica(musicaAtual);
        });

        nextButton.addEventListener('click', () => {
            musicaAtual = (musicaAtual + 1) % musicas.length;
            tocarMusica(musicaAtual);
        });

        playPauseButton.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
                playPauseButton.textContent = '▶️';
            } else {
                audio.play();
                isPlaying = true;
                playPauseButton.textContent = '⏸️';
            }
        });

        // Tocar a primeira música ao carregar a página
        tocarMusica(musicaAtual);
    </script>
