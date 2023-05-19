let robot = require("robotjs");

main();

function main() {
  let first_tree_x = 460;
  let first_tree_y = 500;

  let second_tree_x = 977;
  let second_tree_y = 430;

  console.log("Starting...");
  sleep(2000);

  while (true) {
    chopTree(first_tree_x, first_tree_y);
    dropLogs();
    chopTree(second_tree_x, second_tree_y);
    dropLogs();
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

function chopTree(tree_x, tree_y) {
  robot.moveMouseSmooth(tree_x, tree_y);
  robot.mouseClick();
  console.log("Gathered Logs successfully");
  sleep(7000);
}

function moveToInventory() {
  robot.moveMouse(1350, 665);
  robot.mouseClick();
}
