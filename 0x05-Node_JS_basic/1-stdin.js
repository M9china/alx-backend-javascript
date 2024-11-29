process.stdout.write('Welcome to Holberton School, what is your name?\n');

const isPipedInput = !process.stdin.isTTY;

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    process.stdout.write(`Your name is: ${input}\n`);
    if (!isPipedInput) {
        process.exit();
    }
});

process.on("exit", () => {
    if (isPipedInput) {
        console.log("This important software is now closing");
    }
});
