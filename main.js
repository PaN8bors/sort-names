const names = [
    'Lisa',
    'DShane',
    'Kati',
    'Parish',
    'Abbi',
]

function main() {
    const sorted = names.sort((a,b) => {
        if (a>b) {
            return 1;
        } else if (a<b) {
            return -1;
        } else {
            return 0;
        }
    }
    );

    console.log(sorted);
}

main();