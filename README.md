# IP Address Tracker

This is a web application that allows users to track IP addresses and view their locations on a map, built using React, Leaflet, and Axios.

## Challenges Faced

### 1. **Integrating Leaflet in React App**

**Problem:** Initially, I embedded Leaflet directly into the HTML file by linking the Leaflet JS and CSS files. This created challenges when trying to manage the map's state and behavior inside the React component.

**Solution:** I decided to install Leaflet via npm (`npm install leaflet`) to better integrate it into my React app, allowing more control over the map's state, positioning, and zoom levels. This eliminated the need to modify the HTML document directly and made it easier to manage dependencies and the map’s behavior.

### 2. **Handling Geolocation and IP-based Mapping**

**Problem:** When trying to get the user's current location using the `map.locate()` function in Leaflet, I encountered issues with map re-renders, which led to errors such as the map not positioning correctly after receiving the geolocation data.

**Solution:** I managed the geolocation using React's `useEffect` hook and ensured that the map was only re-rendered when necessary. I also implemented conditions to handle both the user's geolocation and IP-based locations, providing fallback mechanisms in case one of them failed.

### 3. **Zoom Controls Not Functioning**

**Problem:** I faced issues with the zoom controls not functioning correctly within the map when using Leaflet. The zoom buttons were not responsive or would cause errors.

**Solution:** I fixed this by ensuring the zoom control was explicitly added with `L.control.zoom().addTo(map)` after initializing the map. I also checked the map’s container to make sure it had proper dimensions and did not interfere with the zoom control.

### 4. **CORS Errors with API Calls**

**Problem:** During development, I faced CORS (Cross-Origin Resource Sharing) errors when trying to make API calls to third-party services, such as IP location lookup, due to restrictions on certain domains.

**Solution:** I resolved this by using a proxy server for development purposes and ensuring that the API I was using (like Ipify) supported CORS or was being accessed via a server-side solution in production.

### 5. **Handling Errors in API Responses**

**Problem:** Users inputting an incorrect IP address or an unresolvable address caused the app to crash or display misleading information without handling errors properly.

**Solution:** I added error handling to the API request using `try/catch` blocks and displayed user-friendly error messages via `alert` or in the UI. I also validated the input IP address before sending requests to avoid unnecessary API calls.

## Future Improvements

* Implementing more granular error handling and UI feedback during API calls.
* Improving the responsiveness of the map by adjusting its container dynamically.
