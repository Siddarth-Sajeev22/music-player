console.log("Music Player");

let songIndex=0;
let audioElement = new Audio('./songs/NuvoleBianche.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Aankhon Mein Teri Ajab Si", filepath:"songs\Aankhon Mein Teri Ajab Si.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "cover/NuvoleBianche.png"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-play', 'fa-lg');
        masterPlay.classList.add('fa-solid', 'fa-pause', 'fa-lg');
        gif.style.opacity = 1;
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-pause', 'fa-lg');
        masterPlay.classList.add('fa-solid', 'fa-play', 'fa-lg');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (audioElement.duration * myProgressBar.value)/100;
})
