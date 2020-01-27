const auditReducer = (state=0, action) => {
    switch(action.type) {
        case 'WARNING':
            console.log('this is a warning message');
            return state;
        default: return state;
    }
};

export default auditReducer;