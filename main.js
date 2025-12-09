const { crawlPage } = require('./crawl.js');

function main() {
    if (process.argv.length < 3) {
        console.log("No webside provided.");
        process.exit(1);
    }
    if (process.argv.length > 3) {
        console.log("Too many arguments provided.");
        process.exit(1);
    }
    const baseURL = process.argv[2];
    crawlPage(baseURL);
    

    console.log(`Starting crawl of ${baseURL}`)
}

main();

// The first argument of the program is always the name of the program itself.
// The second argument is the name of our code or entry point file.
// The third argument is the one we provide when executing the program.