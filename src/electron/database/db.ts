import Database from "better-sqlite3";
import { print } from "../util.js";

export const db = new Database("dash.db");

const initialQ = `
    CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
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
    {name: "whatsapp"},

    // Browsers
    {name: "arc"},
    
    // Games
    { name: "minecraft" },
    { name: "league of legends"},
    { name: "megabonk"},
]

const insertData = db.prepare("INSERT INTO applications (name) VALUES (?)");

    initialData.forEach((app) => {
        try{
            insertData.run(app.name);
            print("OK", `Inserted "${app.name}" into DB.`)
        }catch{
            print("WARN", `Could not insert "${app.name}" into DB. Ignore if entry was already inserted.`);
        }
    });


