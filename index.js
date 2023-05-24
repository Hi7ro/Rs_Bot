let robot = require("robotjs");

// main();
testScreen();

function main() {
  console.log("Starting...");
  sleep(2500);

  // infinite loop. use cmd+c / ctr+c in terminal to stop the program
  while (true) {
    let tree = findTree();
    // if we can't find a tree, write error message and exit the loop
    if (findTree == false) {
      console.log("Could not find a tree");
      break;
    } else {
      chopTree(tree);
      dropLogs();
    }
  }

  console.log("Done!");
}

function sleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function dropLogs() {
  moveToInventory();
  robot.moveMouse(1286, 707);
  robot.mouseClick("right");
  robot.moveMouse(1300, 780);
  robot.mouseClick();
}

function chopTree(tree) {
  robot.moveMouseSmooth(tree);
  robot.mouseClick();
  console.log("Gathered Logs successfully");
  sleep(7000);
}

function moveToInventory() {
  robot.moveMouseSmooth(1350, 665);
  robot.mouseClick();
}

function findTree() {
  let tree_colors = ["7e5322", "64421a", "533615", "744d1e"];
  let size = 10;
  let x = 0, y = 0, width = 1500, height = 900;
  let img = robot.screen.capture(x, y, width, height);
  let pixel_color = img.colorAt(30, 55);
  
  let sample_color = img.color();
  for(let i = 0; i <= 1000; i++){
    
  }

  console.log(pixel_color);
}
