#Changes made by Wesley Williams

## Loading Overlay

- added `showOverlay` boolean state to App.js  
To close the overlay, The game must be fully loaded and
`showOverlay` must be set to `false` via `setShowOverlay()`
- Overlay buttons added 

### Overlay Background

- Moved background image from style tag to CSS util class `barscene`
- Set background image to cover it's container entirly whit maintaing aspect ratio.
- Added backround to overlay and the main contaier.
    This helps remove the gray flash between the HTML loading and the React script
    starting.
