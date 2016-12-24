import {
  RECENT_DESTINATION,
} from "./actions";


//This is just a dummy data
const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '34 Layon Tw, San Bangladesh', 
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
    {id: 3, icon: 'recent', title: '234 Borno way yaba', subtitle: 'Alagomeji Sameen St'},
    {id: 4, icon: 'recent', title: '23rd Carno Crescent', subtitle: 'Sabo, AU'},
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
