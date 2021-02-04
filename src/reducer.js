export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQCFUbYpvAdSOUeCgchVYNfi0XQvDgE_p2FISXxJbym9y7XYlN33MqqKTiyyV5YTGWgJa9Xybqv3C3vC-bUqrg3IcQjSF9PfKKLe9-rj6nR3UXLwF04a-xXuqNAqxqzKqQvLNu8jXxJSbdUOP_y1dXtPVHWtidCSm0ttk4dLT6-hRrgOT8z3',
};
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,

            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;