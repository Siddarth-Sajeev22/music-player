console.log("Music Player");

let songIndex=0;
let audioElement = new Audio('songs/NuvoleBianche.mp3');

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemsPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
    {songname: "Nuvole Bianche", filepath:"songs/NuvoleBianche.mp3", coverpath: "images/NuvoleBianche.jpg"},
    {songname: "Aankhon Mein Teri Ajab Si", filepath:"songs/Aankhon Mein Teri Ajab Si.mp3", coverpath: "images/aankhon-mein-teri-ajab-si.jpg"},
    {songname: "Tu jaane na", filepath:"songs/Tu Jaane Na.mp3", coverpath: "images/Tu jaane na.jpeg"},
    {songname: "O re piya", filepath:"songs/O Re Piya.mp3", coverpath: "images/o re piya.jpg"},
    {songname: "Ennum Ninne Poojikam", filepath:"songs/Ennum Ninne Poojikam.mp3", coverpath: "images/Ennum ninne poojikam.jpg"},
    {songname: "Rasathi Unne Kanatha Nenju", filepath:"songs/Rasathi unna kanatha nenju.mp3", coverpath: "images/rasathi unna kanatha nenju.jpeg"},
]

songItems.forEach((element,i)=> {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})

const makeAllPlay = ()=>{
    songItemsPlay.forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-pause', 'fa-lg');
        element.classList.add('fa-solid', 'fa-play', 'fa-lg');
        masterPlay.classList.remove('fa-solid', 'fa-pause', 'fa-lg');
        masterPlay.classList.add('fa-solid', 'fa-play', 'fa-lg');
        gif.style.opacity = 0;
    })
    
}

songItemsPlay.forEach((element)=> {
    
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        e.target.classList.remove('fa-solid', 'fa-play', 'fa-lg');
        e.target.classList.add('fa-solid', 'fa-pause', 'fa-lg');
        masterPlay.classList.remove('fa-solid', 'fa-play', 'fa-lg');
        masterPlay.classList.add('fa-solid', 'fa-pause', 'fa-lg');
        gif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        document.getElementById('songPlayingName').innerText = (songs[songIndex].songname);
        document.getElementById('songPlayingName').style.opacity=1;

        
    })

});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        document.getElementById('songPlayingName').innerText = (songs[songIndex].songname);
        document.getElementById('songPlayingName').style.opacity=1;

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

document.getElementById("next").addEventListener('click',()=>{
    
    if(songIndex>5)
    {
        songIndex = 0;
    }
    else 
    {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime=0;
    audioElement.play(); 
    document.getElementById('songPlayingName').innerText = (songs[songIndex].songname);
    document.getElementById('songPlayingName').style.opacity=1;

    masterPlay.classList.remove('fa-solid', 'fa-play', 'fa-lg');
    masterPlay.classList.add('fa-solid', 'fa-pause', 'fa-lg');
    gif.style.opacity = 1;
})


document.getElementById("previous").addEventListener('click',()=>{
    
    if(songIndex<0)
    {
        songIndex = 5;
    }
    else 
    {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime=0;
    audioElement.play(); 
    document.getElementById('songPlayingName').innerText = (songs[songIndex].songname);
    document.getElementById('songPlayingName').style.opacity=1;

    masterPlay.classList.remove('fa-solid', 'fa-play', 'fa-lg');
    masterPlay.classList.add('fa-solid', 'fa-pause', 'fa-lg');
    gif.style.opacity = 1;
})



