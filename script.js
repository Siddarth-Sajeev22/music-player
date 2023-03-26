console.log("Music Player");

let songIndex=0;
let audioElement = new Audio('./songs/NuvoleBianche.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songs = [
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"song/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"song/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"song/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"song/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play fa-lg');
        masterPlay.classList.add('fa-solid fa-pause');
        gif.style.opacity = 1;
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play fa-lg');
        gif.style.opacity = 0;
        
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
}
)