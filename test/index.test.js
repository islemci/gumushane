const { sozcuk, icerik } = require('../dist/index.js');

describe('sozcuk', () => {
    test('29 sayısı için true döndürmeli', () => {
        expect(sozcuk(29)).toBe(true);
    });

    test('"29" stringi için true döndürmeli', () => {
        expect(sozcuk("29")).toBe(true);
    });

    test('"gumushane" stringi için true döndürmeli', () => {
        expect(sozcuk("gumushane")).toBe(true);
    });

    test('farklı büyük/küçük harflerle "GUMUSHANE" stringi için true döndürmeli', () => {
        expect(sozcuk("GUMUSHANE")).toBe(true);
    });

    test('özel karakterlerle "Gümüşhane" stringi için true döndürmeli', () => {
        expect(sozcuk("Gümüşhane")).toBe(true);
    });

    test('"ankara" stringi için false döndürmeli', () => {
        expect(sozcuk("ankara")).toBe(false);
    });

    test('30 sayısı için false döndürmeli', () => {
        expect(sozcuk(30)).toBe(false);
    });
});

describe('icerik', () => {
    test('bir cümle girilmeli ve sonucun true veya false olmasına bakılmalı', () => {
        expect(icerik("Gümüşhane aşığıyım.")).toBe(true);
        expect(icerik("gümüşhane aşığıyım.")).toBe(true);
        expect(icerik("gumüşhane aşığıyım.")).toBe(true);
        expect(icerik("29 aşığıyım.")).toBe(true);
    });
    test('yanlış bir cümle girilmeli ve false dönülmeli', () => {
        expect(icerik("ankara aşığıyım.")).toBe(false);
        expect(icerik("30 aşığıyım.")).toBe(false);
    });
});