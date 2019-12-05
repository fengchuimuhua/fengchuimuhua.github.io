const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	     {
        name: "Young For You",
        artist: 'Gala',
        url: '/musics/youngforu.mp3',
        cover: '/images/young4u.jpg',
      }
    ]
});
