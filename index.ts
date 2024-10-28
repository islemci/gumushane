const yirmidokuz = ["gumushane", "29", 29];

function normalizeString(str: string): string {
    return str
        .toLowerCase()
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ğ/g, 'g');
}

function sozcuk(arguman: any): boolean {
    if (typeof arguman === 'string') {
        return yirmidokuz.includes(normalizeString(arguman));
    } else if (typeof arguman === 'number'){
        return yirmidokuz.includes(arguman);
    } 
   return false;
};

function icerik(icerik: any): boolean {
    const sozcukler = icerik.split(' ');
    for (const kelime of sozcukler) {
        if (sozcuk(kelime)) {
            return true;
        }
    }
    return false;
}

export { sozcuk, icerik };