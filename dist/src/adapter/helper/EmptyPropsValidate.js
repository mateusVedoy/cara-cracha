"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyPropsValidate = void 0;
class EmptyPropsValidate {
    isEmpty(...props) {
        let moveOn = true;
        props.forEach(prop => {
            const prp = prop.replace(' ', '');
            if (prp.length == 0)
                moveOn = false;
        });
        return moveOn;
    }
}
exports.EmptyPropsValidate = EmptyPropsValidate;
//# sourceMappingURL=EmptyPropsValidate.js.map