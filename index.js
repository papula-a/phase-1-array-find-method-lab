function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
a
const record = [
    { year: 1997, result: "W" },
    { year: 1998, result: "L" },
    { year: 1999, result: "W" }
];


