import {
  RECENT_DESTINATION,
} from "./actions";


// This app doesn't use actual APIs or dynamic data currently,
// but feel free to take this app as a starting point and build it out
const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco', 
    	position: {
    		latitude: 37.790732, longitude: -122.3933931
    	}
    },
    {id: 1, icon: 'recent', title: 'Molecule Pi', subtitle: '201-243 Fremont St', 
    	position: {
    		latitude: 37.7572442, longitude: -122.4395917
    	}
    },
    {id: 2, icon: 'recent', title: 'Church', subtitle: '320 Mission St', 
    	position: {
    		latitude: 37.790762, longitude: -122.3985647
    	}
    },
    {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ],
  path: false
};

const DestinationReducer = (state = initialState, action) => {
	switch(action.type) {
		case "RECENT_DESTINATION":
			return {
				...state,
				destination: action.destination,
				path: true
			};
		default:
			return state;
	}
}


export default DestinationReducer;
