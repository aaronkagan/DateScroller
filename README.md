# Date Scroller

Goal: Create a feature that shows the date of the current photo being scrolled over

Implementation: JavaScript's Intersection Observer

Functionality: As the user scrolls through photos, the date the photo was taken will be displayed in a sticky header at the top of the page

Technologies Used: Vite, React, Intersection Observer, Styled-Components

[Link to deployed feature](https://date-scroller.netlify.app)

TODO: The basic functionality is working in mobile view. In desktop view the date changes too soon. This has to do with how I set the thresholds. Currently the root is set to null which sets the root as the viewport itself but I want the root to be the date box so that when the image intersects with the date box the date will change. In progress...
