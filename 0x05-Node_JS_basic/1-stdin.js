process.stdout.write("Welcome to Holberton School, what is your name?\n");

const isInputPipped = process.stdin.isTTY;

process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  if (isInputPipped) {
    process.exit();
  }
});

process.on("exit", () => {
  if (!isInputPipped) {
    console.log("This important software is now closing");
  }
});
