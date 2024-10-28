# gumushane
Herhangi bir argümanın Gümüşhane ile ilgili olup olmadığını anlamanız için tasarlanmış modül.

## Kullanım

### TypeScript
```typescript
import * as gumushane from 'gumushane';

console.log(gumushane.kontrol(29)); // true
console.log(gumushane.kontrol("Gümüşhane")); // true
console.log(gumushane.kontrol("Bayburt")); // false

console.log(gumushane.icerik("Gümüşhane harika bir şehir.")) // true
console.log(gumushane.icerik("29 plakalı şehire bayılıyorum.")) // true
console.log(gumushane.icerik("Bayburt mükemmel bir il!")) // false
```

### Javascript

```javascript
const { kontrol, icerik } = require("gumushane");

console.log(kontrol(29)); // true
console.log(kontrol("Gümüşhane")); // true
console.log(kontrol("Bayburt")); // false

console.log(icerik("Gümüşhane harika bir şehir.")) // true
console.log(icerik("29 plakalı şehire bayılıyorum.")) // true
console.log(icerik("Bayburt mükemmel bir il!")) // false
```

## Lisans
Proje [MIT lisansı](LICENSE) ile korunmaktadır.
