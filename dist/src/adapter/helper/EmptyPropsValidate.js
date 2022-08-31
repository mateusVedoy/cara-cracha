"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyPropsValidate = void 0;
class EmptyPropsValidate {
    isEmpty(props) {
        let moveOn = true;
        if (Object.values(props).length === 0) {
            moveOn = false;
        }
        else {
            for (let prop of Object.entries(props)) {
                const prp = prop[1].replace(' ', '');
                if (prp.length == 0)
                    moveOn = false;
            }
        }
        return moveOn;
    }
}
exports.EmptyPropsValidate = EmptyPropsValidate;
//# sourceMappingURL=EmptyPropsValidate.js.map