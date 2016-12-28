export const displayHits = (data, value) => ({data: {register: data, value: value}, type: 'DISPLAY_HITS'});
export const incrementMiss = (maxAttempts) => ({data: maxAttempts, type: 'INCREMENT_MISS'});
