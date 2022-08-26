"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
class Token {
    constructor(hash, lifetime, key) {
        this.hash = hash;
        this.createdAt = this.dateFormat();
        this.expiresIn = this.dateFormat(this.expiresInCalculate(lifetime));
        this.lifetime = lifetime;
        this.secretKey = key;
    }
    getHash() {
        return this.hash;
    }
    getExpiresIn() {
        return this.expiresIn;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getLifetime() {
        return this.lifetime;
    }
    getSecretKey() {
        return this.secretKey;
    }
    dateFormat(optDate = new Date()) {
        const date = optDate;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = (date.getHours()).toString().padStart(2, '0');
        const min = (date.getMinutes()).toString().padStart(2, '0');
        const formatted = `${year}-${month}-${day}T${hour}:${min}`;
        return formatted;
    }
    //o lifetime precisará ser em milisegundos
    expiresInCalculate(lifetime) {
        const actualDt = new Date();
        const endDateTime = new Date(actualDt.getTime() + parseInt(lifetime));
        return new Date(endDateTime);
    }
}
exports.Token = Token;
//# sourceMappingURL=Token.js.map