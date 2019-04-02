---
path: "/post-four"
date: "Mar 8"
length: "4 min"
title: "Labs IV: Walking the Runway"
author: "Jonathan Laluces"
description: "Coming from the depths of 2005, our HTML looking website needed a face lift, pronto."
---

## Wrapping It All Up

There are many times in left where one finds absolute joy, and this week was definitely one of them. From the solid presentations, to the amazing work everyone in the group has put in, our app is finally coming together.

---

## Walking the Runway

Week four has finally dawned upon us, and that only means one thing: we have to sort a lot of the issues our app is facing. The list of things that needed to be done wasn't too bad:

  - Refactor the Server-Side code for `Creating an Event & Updating an Event`
  - Refactor all the information on the `Single Event Page`
  - Finalize `ALL Functionality` throughout the app
  - Make our app ready for the fashion show

Every day this week we'd conduct our same routine, - after our daily standup meeting we'd host another meeting right after to discuss all the objectives that we need to finish for the week, who'll be jumping on what objective, and then leaving to pair-program, or pop on a playlist and get right to work - our divide and conquer approach has really helped us throughout each week. By discussing who will be working on what files, what feature, and what they might need help with we as a group started to become this well-oiled machine that functioned with each part fulfilling their intended purpose. 

It's almost like watching a high level team in any sport communicate very clearly, and then as a result, that team starts to demolish the opposition. We had each other's back during every step, if someone needed help there was always at least one pair of helping hands ready to go over the code. Developers traditionally might not be the most social people, but our group has really started to become a closely-knit group. 

In retrospect, the changes we had to make this week to this app were not as bad as we expected. In pairs of two, we really as a group were able to tackle the large bug-beasts found in our app in a well-scheduled time, which brings me to another thing I realized about team-based work: our prioritization. Joshua during his mini-lecture on Monday, really had planted the thought of __prioritization__ and __proper-planning__ in my mind and I made sure as a group to emphasize this. Every day, we as a group went over: our `top-priorities`, an estimate of how long those tasks would ideally take, and then carry out those tasks. Our back-end changes to accomodate the user's experience when using the app didn't take much work at all, which really let us unleash our free reign on the front-end of our app to make it look great on mobile, tablet, and desktop devices!

---

### Our current to-do list for the final week is:

  1. [Base App as a whole: ]('https://taco-run-c453f.firebaseapp.com/')
    - Refactor the `whole app` so it keeps a vibrant color scheme, and change the text around to create a more fun experience as a whole for the user
    - Re-factor the navigation so the user has a `+` button to create an event, next to their profile picture
    - Their profile picture should be clickable to take them right to their profile page
    - Home button back to the events page

  2. [Event Create: ]('https://taco-run-c453f.firebaseapp.com/events_create')
    - Invite only should be by default
    - Change text to make the user feel more immersed into our app, right now our text is very dull
    - Ability to look up a location and invite people right off the bat
    - Description Field
    - Theme / Background image for each event
    - Get rid of the author / email field

  3. [Events Dashboard: ]('https://taco-run-c453f.firebaseapp.com/events')
    - Split the card into thirds: ( Taco Pictures || Taco Event Info || Thumbnail of all guests )
    - Taco Instigator instead of "Posted By"
    - Event Card should redirect you, not the button
    - Take Delete Event button out, and put it in single event

  4. [Single Event Page: ]('https://taco-run-c453f.firebaseapp.com/:id')
    - Delete button should be added to bottom of the page
    - Place map off to the side
    - Focus on a more horizontal approach
    - "Show all attendees" button needs to be added instead of showing each card
    - User should be able to get to the discussion almost immediately
    - The Card for the location should take you right to the yelp link associated with it, not a button that says `yelp link`
    - (Bug): Fix the update form so all fields work
    - Refactor Comments section:
      - Should span full width
      - Stackable

  5. [Profile Info Page: ]('https://taco-run-c453f.firebaseapp.com/user-profile')
    - Put the delete friend button inside the user's profile page, not directly on the friends list
    - Make the add-friend component more prominent
    - Small text change: Shell --> Tortilla

---

__PR List for this week:__

- https://github.com/Lambda-School-Labs/labs10-taco-run/pull/99
  - Worked on the Profile info page, and profile settings page to look great on all devices
- https://github.com/Lambda-School-Labs/labs10-taco-run/pull/94
  - Pair programmed with Benny so the events dashboard looks great on all devices
- https://github.com/Lambda-School-Labs/labs10-taco-run/pull/89
  - Add ability to invite others to your event
- https://github.com/Lambda-School-Labs/labs10-taco-run/pull/84
  - Starting code for the update event info, base functionality