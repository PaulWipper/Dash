import { app } from "electron";
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { Print } from "../util.js";

export type DB = Database.Database;
export let db: DB;

const DB_FILENAME = "dash.db";
const SUBDIR = "db";

export function initDatabase(): DB {

    const baseDir = path.join(app.getPath("userData"), SUBDIR);
    fs.mkdirSync(baseDir, { recursive: true });
    const dbPath = path.join(baseDir, DB_FILENAME);

    try {
        const legacyPath = path.join(process.cwd(), DB_FILENAME);
        if (!fs.existsSync(dbPath) && fs.existsSync(legacyPath)) {
            fs.copyFileSync(legacyPath, dbPath);
            Print.ok(`Migrate existing DB from ${legacyPath} → ${dbPath}`);
        }
    } catch (e) {
        Print.warn(`Migration skipped: ${(e as Error).message}`);
    }

    db = new Database(dbPath);
    db.exec(`
        PRAGMA journal_mode = WAL;
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY,
            name TEXT UNIQUE NOT NULL,
            nickname TEXT,
            path TEXT,
            totalActive REAL,
            lastActive TEXT,
            firstActive TEXT
        );
        `);

    const initialData = [
        // Developer & Work
        { name: "figma" },
        { name: "code" },
        { name: "notion" },

        // Streaming
        { name: "spotify" },

        // Communication
        { name: "discord" },
        { name: "whatsapp" },

        // Browsers
        { name: "arc" },

        // Games
        { name: "minecraft" },
        { name: "league of legends" },
        { name: "megabonk" },
    ];

    const insert = db.prepare(
        "INSERT INTO applications (name) VALUES (?) ON CONFLICT(name) DO NOTHING"
    );
    const seed = db.transaction((rows: { name: string }[]) => {
        for (const r of rows) insert.run(r.name);
    });
    seed(initialData);

    Print.ok(`DB ready at: ${dbPath}`);
    return db;
}
