// Add your code here!
const container = document.querySelector('main')
const heading = document.querySelector('head')

//Main title

const title = document.createElement('h1')
title.innerText = 'The best How I Met Your Mother episode (according to fans)';
container.appendChild(title);

//p1
const para1 = document.createElement('p')
para1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
container.appendChild(para1);

//subt
const subtitle = document.createElement('h2')
subtitle.innerText = 'The Slap Bet (Season 2, Episode 9)';
container.appendChild(subtitle);

//p2
const para2 = document.createElement('p')
para2.innerText = 'IMDB Rating: 9.5';
container.appendChild(para2);

//img
const pic = document.createElement('img')
pic.src="https://himym2017.files.wordpress.com/2017/03/robin-sparkles1.jpg";
pic.alt="Robin Sparkles"
container.appendChild(pic);

//p3 
const para3 = document.createElement('p')
para3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
container.appendChild(para3);


//p4
const para4 = document.createElement('p')
para4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles.Barney finds the music video for her hit single“Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
container.appendChild(para4);

// link
const xlnk = document.createElement('a')
xlnk.innerText = 'source';
xlnk.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
container.appendChild(xlnk);

//style sheet

const cssheet = document.createElement('link');
cssheet.rel = 'stylesheet';
cssheet.href = 'styles.css';
document.head.appendChild(cssheet);