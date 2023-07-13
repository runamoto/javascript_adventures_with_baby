const prompt = require("prompt-sync")({ sigint: true });

let inputPassword = prompt("What is your password? ");
let realPassword = "monkey";

let diary = [];

if (inputPassword == realPassword) {
  console.log("authenticated");
  let entry_1 = getEntry();
  let entry_2 = getEntry();
  let entry_3 = getEntry();

  diary.push(entry_1);
  diary.push(entry_2);
  diary.push(entry_3);

  console.log(diary);
} else {
  console.log("scream");
}

function getEntry() {
  let entry = {
    title: prompt("What is your title?"),
    day: prompt("What day is it today?"),
    // month: prompt("What month is it?"),
    // body: prompt("enter your diary entry"),
    // notes: prompt("enter a note"),
  };

  return entry;
}

// prettier-ignore
function printEntry(entry) {
  console.log("Thanks!!");
  console.log(
    "\ntitle: " + entry.title +
      "\nDay: " + entry.day +
      "\nMonth: " + entry.month +
      "\nToday's entry: " + entry.body +
      "\nNotes: " + entry.notes
  );
}
