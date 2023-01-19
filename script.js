console.log("Welcome to music player");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songlist/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let timestamp = document.querySelector('.timestamp');
console.log(timestamp);
let songs = [
    {songName:"Gabru", filePath:"songlist/song1.mp3", coverPath:"cover/cover1.jpg"},
    {songName:"Roop_de_punjbi", filePath:"songlist/song2.mp3", coverPath:"cover/cover2.jpg"},
    {songName:"BuZZ_feat_Badshah", filePath:"songlist/song3.mp3", coverPath:"cover/cover3.jpg"},
    {songName:"Aadat_mix", filePath:"songlist/song4.mp3", coverPath:"cover/cover4.jpg"},
    {songName:"Patola feat Bohemia | Guru", filePath:"songlist/song5.mp3", coverPath:"cover/cover5.jpg"},
    {songName:"12 Mahine | kulwinder billa", filePath:"songlist/song6.mp3", coverPath:"cover/cover6.jpg"},
    {songName:"Nazar lag jayegi", filePath:"songlist/song7.mp3", coverPath:"cover/cover7.jpg"},
    {songName:"06. Naah (Harrdy Sandhu)  ", filePath:"songlist/song8.mp3", coverPath:"cover/cover8.jpg"},
    {songName:"Ban Ja Rani (Tumhari Sulu)", filePath:"songlist/song9.mp3", coverPath:"cover/cover9.jpg"},
    {songName:"3 Peg | sharry maan", filePath:"songlist/song10.mp3", coverPath:"cover/cover10.jpg"},
    
]

songItems.forEach((element, i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
    // console.log(audioElement.currentTime);
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songlist/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
        songIndex += 1;
    }
    audioElement.src = `songlist/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=0){
        songIndex=0
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songlist/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})