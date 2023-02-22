const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** false Smile */
const message = ["‾", `\\`, "_", "(", "'", "'", ")", "_", "/", "‾"];
let printMassage = "";
let num = 0;

/** All Riddles */
const riddle = [
  ["What is always in front of you but can't be seen?", "future"],
  ["What has a heart that doesn't beat? ", "artichoke"],
  ["What has a neck but no head? ", "bottle"],
  [
    "What can travel around the world while staying in the same corner? ",
    "stamp",
  ],
  ["What has a face and two hands but no arms or legs? ", "clock"],
  ["What has a bed but never sleeps, and a mouth but never eats? ", "river"],
  ["What is full of holes but still holds water? ", "sponge"],
  [
    "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but I need water to live. What am I? ",
    "fire",
  ],
  [
    "What starts with an E, ends with an E, but only contains one letter? ",
    "envelope",
  ],
  ["What has a head and a tail but no body? ", "coin"],
  ["What can you catch but not throw? ", "cold"],
  ["The more you take, the more you leave behind. What am I? ", "footsteps"],
  ["What has a thumb and four fingers but is not a hand? ", "glove"],
  ["What is always in front of you but can't be seen? ", "mirror"],
  ["What is so fragile that saying its name breaks it? ", "silence"],
  ["What has a ring but no finger? ", "telephone"],
  ["What has a bottom at the top? ", "leg"],
  [
    "What is as light as a feather but even the world's strongest man couldn't hold it for long? ",
    "breath",
  ],
  ["What is always in front of you but can never be seen? ", "tomorrow."],
];

/** Select Random riddle */
const questions =
  riddle[Math.floor(Math.random(0, riddle.length) * riddle.length)];

/** Create answer place */
let ans = "";
for (let i = 0; i < questions[1].length; i++) {
  ans += "-";
}

/** get letters from user */
function getData(answer) {
  console.clear();
  let arrAns = answer.split("");
  rl.question(
    `${questions[0]}  

  ${printMassage} 

  ${answer} <= `,
    (letter) => {
      if (questions[1].includes(letter)) {
        for (let i = 0; i < questions[1].length; i++) {
          questions[1][i] == letter && (arrAns[i] = letter);
        }
      } else {
        printMassage += message[num++];

        if (num > message.length) {
          console.log(
            "\x1b[31m%s\x1b[0m",
            `
          The answer is ${questions[1]}
          
          𝕐𝕆𝕌 𝕃𝕆𝕊𝕋

          `
          );

          rl.close();
          return;
        }
      }

      getData(arrAns.join(""));

      if (!arrAns.includes("-")) {
        console.warn(
          "\x1b[32m%s\x1b[0m",
          `
        
        --------------- 𝕎  𝕀 ℕ ℕ 𝔼 ℝ ------------------
        
        `
        );
        rl.close();
        return;
      }
    }
  );
}

getData(ans);
