const RECENT_DESTINATION = "RECENT_DESTINATION";

export const setRecentDestination = (destination) => ({
	destination,
	type: RECENT_DESTINATION
});


export const setDestination = (destination) => async dispatch => {
	dispatch(setRecentDestination(destination));
};