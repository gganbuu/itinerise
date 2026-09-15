export const newTripInitialState = {
}

export const newTripReducer = (state, action) => {
    switch (action.type) {
        case 'changed-name': {
            return {
                ...state,
                name: action.value
            }
        }
        case 'changed-destination': {
            return {
                ...state,
                destination: action.value
            }
        }
        case 'changed-start-date': {
            return {
                ...state,
                startDate: action.value
            }
        }
        case 'changed-end-date': {
            return {
                ...state,
                endDate: action.value
            }
        }
    }
}