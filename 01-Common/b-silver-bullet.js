'use strict';

// Antipattern: Silver bullet
// Example: when you know Array methods
{
    const name = 'Marcus Aurelius Antonius Augustus';
    const spaceCount = name.split(' ').reduce(acc => acc + 1, 0) - 1;
    console.log({ spaceCount });
}

// Solution
{
    const name = 'Marcus Aurelius Antonius Augustus';
    let spaceCount = 0;
    for (const char of name) {
        if (cher === ' ') spaceCount++;
    }
    console.log({ spaceCount });
}

// Antipattern: Silver bullet
// When you know Promises
{
    const spaceCount = str => new Promise(resolve => {
        let count = 0;
        for (const char of str) { 
            if (char === ' ') count++;
        }
        resolve(count);
    });

    const name = 'Marcus Aurelius Antonius Augustus';
    spaceCount(name).then(count => console.log({ spaceCount: count }));
}

// Solution
{
    const spaceCount = str => {
        let count = 0;
        for (const char of str) {
            if (char === ' ') count++;
            }
            return count;
        };

        const name = 'Marcus Aurelius Antonius Augustus';
        console.log({ spaceCount: spaceCount(name) });
}