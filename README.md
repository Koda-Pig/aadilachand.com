## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Time used

  ~ 28 hours total

  ~ 6 hours building structure and adding basic styles

  ~ 7 hours getting design as pixel perfect as possible

  ~ 3 hours rebuilding video controls

  ~ 3 hours fighting bootstrap

  ~ 3 hours adding animations to components

  ~ 3 hours reading docs, stack overflow posts, or otherwise researching how to use various components

  ~ 3 hours adjusting styling and layout for screen sizes inbetween the provided desktop and mobile style guides. 
____________________________________________________________________________

## Bugs, issues and ommited

  Font weights - could not find a fully variable font, so I was not able to make smaller adjustments to font weight (only bold or normal, not 100 - 900 values).

  Struggled with Bootstrap - ended up not using it much as it was taking me too long. Things that hindered me were the innacuracy of the positioning, margin, and padding, and also that some components (eg: scroll to top btn) were not working.

  Took a while to rebuild the video player controls and style them - could do with more work. For eg: Volume control is not fully implemented, only mute and unmute.

  What threw me off, is sometimes things looked different to how they were actually listed in the css that the guide provides. Eg: the tags 'basic skills' 'coaching' etc, look transparent or gray in color, but are defined as solid white in the style guide.

  The snapshots section on mobile - are these suppose to be swiped to the side? Wasn't sure, so I stacked them vertically.

  On the menu slide animation, I omitted the having the whole page content slide to the left, as the menu slides in from the right. I simply ran out of time to do this.

  # re the design guide:

    Curious about so many floating point values in project design css (eg: margin: 24.4px), is that intended?

    The letter spacing is listed as 0 (same as 'normal') in a lot of places (eg on the price) but it defintely looks more like 1px. I left it as it is listed in the guide. Am I mistaken here?
    
    "Available as snapshot" button/ tag component - it's just an image in the guide, no fontsize listed.
    
    On video, on mobile layout - "Watch a trailer" text is gray and basically invisbile. Is this intentional? (I left it out).