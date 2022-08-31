import { IEmptyProps } from "../../app/ports/helper/IEmptyProps";

export class EmptyPropsValidate implements IEmptyProps {
    public isEmpty(props: Object): Boolean {
        let moveOn: Boolean = true;
        if(Object.values(props).length === 0){
            moveOn = false;
        }else{
            for (let prop of Object.entries(props)) {
                const prp = prop[1].replace(' ', '');
                if (prp.length == 0) moveOn = false;
            }
        }
         
        return moveOn;
    }
}