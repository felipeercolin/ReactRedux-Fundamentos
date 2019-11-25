const userKey = '_mymoney_user';
const INITIAL_VALUE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
};

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED'://token validado
            if(action.payload){
                return {...state, validToken: true};
            } else {
                localStorage.removeItem(userKey);
                return {...state, validToken: false, user: null};
            }
        case 'USER_FETCHED'://usuario obtido=passou pelo signup ou login
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return {...state, user: action.payload, validToken: true};
        default: return state;
    }
};