# AcciGuard

**AcciGuard** is an interactive map application designed to enhance road safety by alerting users when they are near accident hotspots. This web-based tool allows users to visualize known accident-prone areas on a map and receive real-time alerts if they come within a certain proximity to these hazardous locations.

## DEMO - https://youtu.be/sja4Um3P_Ew

## Features

- **Interactive Map:** Users can view accident hotspots marked with red transparent circles on an interactive map.
- **Search Functionality:** Users can search for specific locations and view them on the map.
- **User Location Tracking:** The application tracks the user's location and updates the map accordingly.
- **Proximity Alerts:** When a user is within 50 meters of a known accident hotspot, the application triggers an audio alert and a visual notification.
- **Simulated Location for Testing:** The application includes a simulated location feature to test proximity alerts easily.

## How It Works

### 1. Initialization
The application starts by initializing a Leaflet map centered on a default location. The map uses OpenStreetMap tiles for rendering.

### 2. Displaying Hotspots
Nine accident hotspots in NY State are pre-defined with their latitude and longitude coordinates. These hotspots are displayed on the map as red, semi-transparent circles with a radius of 50 meters. These circles visually indicate areas where accidents are more likely to occur.

### 3. Search Functionality
The map includes a search box that allows users to search for specific locations using the Nominatim API. When a user types a location into the search box, the map fetches possible matching locations and displays them in a dropdown list. Selecting a location from this list centers the map on that location and adds a marker.

### 4. User Location Tracking
The application has a "Locate Me" button that, when clicked, attempts to find the user's current location using the browser's geolocation API. Once the location is found, it places a marker at the user's location and checks the distance to each hotspot.

### 5. Proximity Alert
The application continuously monitors the distance between the user's current location (or simulated location for testing) and the accident hotspots. If the user is detected within 50 meters of any hotspot, the application plays a beep sound and displays a warning message to alert the user of the potential danger.

### 6. Simulated Location for Testing
To facilitate testing, the application includes a feature that simulates the user's location at one of the hotspots. This allows developers and users to test the proximity alert system without needing to physically visit the hotspot.

## Project Structure

### HTML Structure
- **`<div id="map">`**: Container for the Leaflet map.
- **`<div id="search-box">`**: Contains the search input field and the dropdown list for search results.
- **`<button id="locate-btn">Locate Me</button>`**: Button for triggering the location tracking and alert system.

### CSS Styling
- Basic styling for the map, search box, and locate button.
- Ensures responsive design, proper alignment, and visibility of elements.

### JavaScript Functionality
- **Leaflet Initialization**: Initializes the map and adds OpenStreetMap tiles.
- **Hotspot Circles**: Draws red transparent circles on the map at specified coordinates.
- **Search Functionality**: Implements location search using the Nominatim API, allowing users to find and center on specific locations.
- **Location Tracking**: Tracks the user's current location or simulates a location for testing purposes.
- **Proximity Alert**: Monitors the user's distance to hotspots and triggers alerts if within 50 meters.

### External Libraries
- **Leaflet.js**: For rendering the interactive map.
- **Nominatim API**: For geocoding and reverse geocoding in the search functionality.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ahmed123Hussain/AcciGuard.git
   cd AcciGuard
   ```

2. **Open `index.html`:**
   Open the `index.html` file in your web browser to start using AcciGuard.

3. **Search for Locations:**
   Use the search box to find specific places on the map.

4. **Locate Me:**
   Click the "Locate Me" button to find your current location and check for proximity to accident hotspots.

5. **Test Alerts:**
   The application will automatically alert you if you are within 50 meters of any accident hotspot.

## Future Enhancements

- **Dynamic Hotspot Data:** Integrate with APIs to fetch real-time accident data and dynamically update hotspots.
- **User Customization:** Allow users to add custom hotspots and set custom alert distances.
- **Mobile App:** Develop a mobile version of AcciGuard with push notifications for proximity alerts.

## Contributing

Contributions are welcome! Please submit pull requests or report issues on the [GitHub repository](https://github.com/Ahmed123Hussain/AcciGuard).

## License

This project is licensed under the MIT License.
