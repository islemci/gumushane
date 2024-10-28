"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sozcuk = sozcuk;
exports.icerik = icerik;
const yirmidokuz = ["gumushane", "29", 29];
function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ğ/g, 'g');
}
function sozcuk(arguman) {
    if (typeof arguman === 'string') {
        return yirmidokuz.includes(normalizeString(arguman));
    }
    else if (typeof arguman === 'number') {
        return yirmidokuz.includes(arguman);
    }
    return false;
}
;
function icerik(icerik) {
    const sozcukler = icerik.split(' ');
    for (const kelime of sozcukler) {
        if (sozcuk(kelime)) {
            return true;
        }
    }
    return false;
}
