// Preset values
const FROGS = 3;
const container = document.querySelector("main");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 1; i <= FROGS; i++) {
  const lane = document.createElement("li");
  const space = document.createElement("span");
  space.innerText = "Lane" + i;
  container.appendChild(lane);
  lane.appendChild(space);

  lane.id = "lane-" + i;
}
//2.2
racers = [];

for (let i = 1; i <= FROGS; i++) {
  let newguy = frogStable[i];
  racers.push(newguy);
}

console.log(racers);

//2.3 I ran through the code but it doesnt seem to work.

racers.forEach(function (racer, id) {
  const newFriend = document.createElement("span");
  newFriend.innerText = racer.number;
  newFriend.classList.add("frog");
  newFriend.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFriend);
});
