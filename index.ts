const yirmidokuz = ["gumushane", "29", 29];

function normalizeString(str: string): string {
    return str
        .toLowerCase()
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ğ/g, 'g');
}

function kontrol(arguman: any): boolean {
    if (typeof arguman === 'number') {
        return yirmidokuz.includes(arguman);
    } else {
    return yirmidokuz.includes(normalizeString(arguman.toLowerCase()));
}};

export { kontrol };