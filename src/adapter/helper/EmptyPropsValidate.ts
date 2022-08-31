import { IEmptyProps } from "../../app/ports/helper/IEmptyProps";

export class EmptyPropsValidate implements IEmptyProps {
    public isEmpty(props): Boolean {
        let moveOn: Boolean = true;
        for (let prop in props) {
            const prp = prop.replace(' ', '');
            if (prp.length == 0) moveOn = false;
        }
        return moveOn;
    }
}