import Database from "better-sqlite3";

export const db = new Database("dash.db");

const initialQ = `
    CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        nickname TEXT,
        path TEXT,
        totalActive REAL,
        lastActive TEXT,
        firstActive TEXT
        )`

db.exec(initialQ)

const initialData = [

    // Developer & Work
    {name: "figma"},
    {name: "code"},
    {name: "notion"},

    // Streaming
    {name: "spotify"},

    // Communication
    {name: "discord"},

    // Browsers
    {name: "arc"},
    
    // Games
    { name: "minecraft" },
]

const insertData = db.prepare("INSERT INTO applications (name) VALUES (?)");

initialData.forEach((app) => {
    insertData.run(app.name);
});


