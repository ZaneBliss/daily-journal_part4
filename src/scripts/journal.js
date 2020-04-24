fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        console.table(parsedEntries)
        renderJournalEntries(parsedEntries)
    })

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h1>${journalEntry.concepts}</h1>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.date}</p>
    <p>${journalEntry.mood}</p>
    `
}

const renderJournalEntries = (entries) => {
    for (let index = 0; index < entries.length; index++) {
        let journalElement = document.querySelector(".entryLog");
        journalElement.innerHTML += makeJournalEntryComponent(entries[index]);
    }
}
// renderJournalEntries(journalEntries)