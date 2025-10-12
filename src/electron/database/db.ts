import Database from "better-sqlite3";

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

    // Browsers
    {name: "arc"},
    
    // Games
    { name: "minecraft" },
    { name: "minecraft launcher" },
    { name: "league of legends" },
    { name: "leagueclient" },
    { name: "leagueclientux" },
    { name: "valorant" },
    { name: "valorant-win64-shipping" },
    { name: "cs2" },
    { name: "csgo" },
    { name: "dota2" },
    { name: "fortnite" },
    { name: "fortniteclient-win64-shipping" },
    { name: "apex legends" },
    { name: "r5apex" },
    { name: "rocketleague" },
    { name: "rocket league" },
    { name: "overwatch" },
    { name: "overwatch 2" },
    { name: "gtav" },
    { name: "gta5" },
    { name: "red dead redemption 2" },
    { name: "rdr2" },
    { name: "baldurs gate 3" },
    { name: "bg3" },
    { name: "elden ring" },
    { name: "eldenring" },
    { name: "cyberpunk2077" },
    { name: "the witcher 3" },
    { name: "witcher3" },
    { name: "starfield" },
    { name: "escape from tarkov" },
    { name: "tarkov" },
    { name: "pubg" },
    { name: "tslgame" },
    { name: "rainbow six siege" },
    { name: "r6siege" },
    { name: "warzone" },
    { name: "modern warfare" },
    { name: "call of duty" },
    { name: "diablo iv" },
    { name: "diablo4" },
    { name: "path of exile" },
    { name: "genshin impact" },
    { name: "genshinimpact" },
    { name: "honkai star rail" },
    { name: "lost ark" },
    { name: "new world" },
    { name: "stardew valley" },
    { name: "among us" },
    { name: "palworld" },
    { name: "palworld-win64-shipping" },
    { name: "fall guys" },
    { name: "destiny 2" },
    { name: "osu!" },
    { name: "star citizen" },
]

const insertData = db.prepare("INSERT INTO applications (name) VALUES (?)");

initialData.forEach((app) => {
    insertData.run(app.name);
});


