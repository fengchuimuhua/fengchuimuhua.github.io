const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	     {
        name: "Young for you",
        artist: 'Gala',
        url: '/musics/youngforu.mp3',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
      }
    ]
});
