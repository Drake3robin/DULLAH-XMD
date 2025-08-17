const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUy47iRhT9lai2oGk/MSC1FNsYDJiHwWAgyqLaLj9ou2yqyoAZtRRFo3xA1L1szSrrbBMlXzNfwCdEprszLU0y6XhVL997zrnn3vcAZzFFQ1SC9nuQk3gPGaqWrMwRaAOtCAJEQB34kEHQBra17tHDoXDUqFEzw7GWLHXY7E6WJyWGlihSoksRzgJTWF+DuzrIi5sk9r4ScNfa+LB7XIz9YO1uBe0wXqU9S20JWq/mHvlM9AfFfNBVAnF0De6qiDAmMQ6NPEIpIjAZonIKY/I2+FKv7OygMbIizp/r2TDdKcvtdKNpvVW0tmrTMTadWcAJFs7eBn+oilrYWHk4agzSJmN0M4ioFeU3yJ6h1hYqjOotI10VbvMJPo1DjPy+jzCLWflm3Wlnz5KOK03wsi8cXdHcBdE6Wq5lLlVPZHOa8FlRU04K5Iy3AZfkMCGcZQVWvN2YhaEYmbIqx7KwmK/klmNALpzV6CpvpOFr4FPy4pXb/6P7Qg+7Jle2VvkB2vvkhE9U0W6GJZwftr2Rk8qrzqapwb5rvtE2YjzbLvVwaR7X6s0yRL2b4+bUUTFTOpEmmvPudLSTsK27qvQZPmQF+RrKYH/La9aaOs1EsegNjJN46MVLXaTz0RCSMR5Pmk7as2eDZK5EfddVYOGuGpK2aCjmxNtNdBlDp+zK5czxYM2QjMhW7esLo1tU9n3Q5u/qgKAwpoxAFme4OhMErg6gv58jjyB2kRdYWNuVnJ3OyqF1OHU4TfeXtcGJNyx21MzOyT2m6/ENDPi1fQ3qICeZhyhFvhlTlpFyhCiFIaKg/d2lUhVpgtKMoUHsgzYQZEnheIWXeIH/lr47RJBRmOfvMGKgDgKSpSME2owUqA4uP3R53hAbiqiIuqqIWlcSNU3mWorWNDi9JRkVxfQpqROniDKY5qDNK7IsCU2xxd99XwcYHdmTfyrWIl8HQUwoW+AiTzLov5jr5RJ6XlZgNi+xp1cLRED71TFiLMYhrZgVGBIvivdIr3iAdgATiv4WGhHkv3B5Hh565lf15/iWNdB1G1TYq0BfaNOWG1/Kk1ye8ZKsSLykKHKTazWl6mV1UQcYVsHA+fH+j08fHs+P97+dHx9+PD/e/yle9g8/nR/vfz8/Pvzw6cPDN+eP97+cP/78ayXgM7UKiY8YjBMK2kAfxIICDx2jb9GILno91Q5VPVTBZylerP1kncF2LvZ2waQ8eBu9oWyEDlzP1u705jajnjzZNsqsF4022q2oXv9DENAGV7It9p3R/ChzJ5VY6CrkGJ9GmWOXXj9CsCGwdYg7gd0hh7XDadjwZ+MQTYXQQYxZ1rwbjfhl3LtKjgeU2xQV+5kWXlfZfLSPPfQ6mesQ3VSU/cmfiDluqJ545SDX5WF6y7U2CW7c+lfEmbc0/erINO60QtPDsgkVZzs8sqYopEJzUcIdRkt3LLoKUQnHdZ6b7tL0yfOwjZ/bIb5sgxhdZtdztf6z6E/AK29yd/VXMZ6n4b9MFG2+5thxh0+Umj27KAQ/FFLD7W4FeWiZEyer0Z2WOT17Mz6Au6pJ8gSyICMpaAOIfZJdLEWyojJ7HwfZV5Lp6sJWj6paMU8gZernBvqHnmxIT6+mJMtNSKNKhKWi7BZVN5Rqns8ZZC/9CNTqG8IuuPsL+ltMqjIIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254701714121",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
