# gumushane
Herhangi bir argümanın Gümüşhane ile ilgili olup olmadığını anlamanız için tasarlanmış modül.

## Kullanım

### TypeScript
```typescript
import * as gumushane from 'gumushane';

console.log(gumushane.kontrol(29)); // true
console.log(gumushane.kontrol("Gümüşhane")); // true
console.log(gumushane.kontrol("Bayburt")); // false
```

### Javascript

```javascript
const { kontrol } = require("gumushane");

console.log(kontrol(29)); // true
console.log(kontrol("Gümüşhane")); // true
console.log(kontrol("Bayburt")); // false
```

## Lisans
Proje [MIT lisansı](LICENSE) ile korunmaktadır.
