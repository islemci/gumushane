"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kontrol = kontrol;
const yirmidokuz = ["gumushane", "29", 29];
function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ğ/g, 'g');
}
function kontrol(arguman) {
    if (typeof arguman === 'number') {
        return yirmidokuz.includes(arguman);
    }
    else {
        return yirmidokuz.includes(normalizeString(arguman.toLowerCase()));
    }
}
;
