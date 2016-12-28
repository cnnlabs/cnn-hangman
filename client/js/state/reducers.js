export const alphabet = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.data.alphabet || state;
        default:
            return state || [];
    }
};

export const blocks = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.data.blocks || state;
        case 'DISPLAY_HITS': {
            let clone = state.slice(0);

            action.data.register.forEach((v) => {
                clone[v] = action.data.value;
            });

            return clone;
        }
        default:
            return state || [];
    }
};

export const maxAttempts = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.data.maxAttempts || state;
        default:
            return state || 0;
    }
};

export const message = (state, action) => {
    switch (action.type) {
        case 'NOTIFY_MISS':
            return `${action.data} more attempts left.`;
        case 'CLEAR_MESSAGE':
            return '';
        default:
            return state || '';
    }
};

export const miss = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_MISS':
            return (state + 1 < action.data) ? state + 1 : action.data;
        default:
            return state || 0;
    }
};

export const userLost = (state, action) => {
    switch (action.type) {
        case 'USER_LOST':
            return true;
        default:
            return false;
    }
};

export const selection = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.data.selection || state;
        case 'UPDATE_SELECTION':
            return action.data || state;
        default:
            return state || '';
    }
};

export const word = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.data.word || state;
        default:
            return state || '';
    }
};
