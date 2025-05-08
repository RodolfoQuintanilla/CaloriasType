import { Activity } from '../types/index';


export type ActivityAction = {
    type: 'save-activity', paylod: { newActivity: Activity }
}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const ActivityReducer = (
    state: ActivityState = initialState,
    action: ActivityAction
) => {

    if (action.type === 'save-activity') {
        //Estecodigo maneja la logica del state
        console.log('desde el type de save-activity');

    }

}
