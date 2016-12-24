import { Map } from "immutable";

import {
  RECENT_DESTINATION,
} from "./actions";


const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ]
};

const DestinationReducer = (state = initialState, action) => {
	console.log(action);
	switch(action.type) {
		case RECENT_DESTINATION:
			return {
				...state,
				destination: action.destination
			}
		default:
			return state;
	}
}


export default DestinationReducer;
