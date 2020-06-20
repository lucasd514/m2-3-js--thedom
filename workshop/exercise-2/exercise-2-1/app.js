// Preset values
const FROGS = 3;
const listBox = document.querySelector("#track");
//2.1
for (let i = 1; i <= FROGS; i++) {
  let listItem = document.createElement("li");
  listBox.appendChild(listItem);

  let spanNo = document.createElement("span");
  spanNo.innerText = i;
  spanNo.id = "lane-" + i;
  listItem.appendChild(spanNo);
}
//2.2
let racers = [];

for (let n = 0; n < FROGS; n++) {
  const froggy = frogStable[n];
  racers.push(froggy);
}

console.log(racers);
/// Exercise 2.3

racers.forEach(function (racer, id) {
  // add the frogs to a lane
  // for now, frogs are simply shapes in the lane.
  const newFrog = document.createElement("span");
  newFrog.innerText = racer.number;
  newFrog.classList.add("frog");
  newFrog.style.background = racer.color;
  document.getElementById("lane-" + (id + 1)).appendChild(newFrog);

  racers[id].progress = 0;
  racers[id].lane = "lane-" + (id + 1);

  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById("lane-" + (id + 1)).appendChild(frogProgress);
});
