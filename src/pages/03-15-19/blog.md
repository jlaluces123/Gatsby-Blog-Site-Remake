---
path: "/post-five"
date: "Mar 15"
length: "4 min"
title: "Labs V: Finishing Strong"
author: "Jonathan Laluces"
description: "Whether you're running a marathon, or doing a sprint, there is no better feeling than getting to the finish line. "
---

# Making It To the Finish Line


## The Overview

And here we are, the final day of Labs and boy has there been a lot of work put into the project. From organization, to styling and fixing functionality, there has been a lot of tasks that I had to complete throughout the 5-week sprint. So lets begin with organization: the key part to any project. Being neat and tidy has always been my `thing` and organization really just fit right in for me. You'll notice on the trello board, I labeled every card as well as described each task to great length inside each card as a way to keep the team on the same page about what tasks needed to be done while also storing them neatly inside different sections. To go along with organization I also always made sure we met up after our standup in the morning to go over any breaking changes, emergencies, or just discussing the tasks and dividing up work accordingly, every team member counts and this was a way to make sure everyone had something to do (shoutout to slack's call system for not having a time limit!). Throughout the sprint we used React, and Redux on the front-end along with Material-UI as our design framework. I was comfortable with these technologies and fleshed out functionality for certain pages, styled pages accordingly, and was able to produce responsive designs. At times, building out the functionality of these pages was not easy in any sense. To highlight one of the main challenges, we had to fix the main functionality of our app (creating events) numerous times. From switching where we should load the component, to what fields should be in the form, changing that component / functionality was always a pain, but I also think that's where everyone in our group shined as well. I, along with my teammates had to take feedback constantly after check-ins and adapt to the changes that were requested in the short amount of time, always staying on our toes.

---

## Learning Something New Everyday
- This is the [trello card]('https://trello.com/c/i6DEMsih/64-material-ui-research') for reference

From what I have learned researching job positions, one of the main sentences I always see is: 

> Candidate is willing to learn new technology and constantly adapt

and that is exactly what I had to do for one of our weeks in the sprint. Our group by week three had created components that feel completely different and contradictory to each other. We needed a way to come up with a uniform look, and this is where I took the initiative to learn a design framework I have never used before: Material-UI. You will find when using Material-UI for the first time, that it is super confusing to override the pre-defined styles that are given in each pre-built component nor is it easy to debug styling in the developer console. Here are some of the components from Material-UI that we used:

---

 - Image of the Avatar Card + Tab Bar from Material-UI
![Image of the Avatar Card + Tab Bar](Avatar_Card.png "Image of the Avatar Card + Tab Bar")

- Image of the Events List Using the Tab Bar and Card + CardMedia components
![Image of the Events List Using the Tab Bar and Card + CardMedia components](Events_List.png)

---

## Together We Stand

Working as a group on one single project is something I have never done before, and it sure comes with its `ups-and-downs`. There is no doubt in my mind that without any of the members in our group there is no way we would have made the progress that we did building this application. I found it to be an exhilerating experience being able to code, hit a problem, and have a helping hand ready to pick me up at any moment. Along with the aspect of helping others, I found working with a group helped me refine my own skills in certain areas as well as learn something new. 

But with helping each other comes a challenge that I am sure every developer runs into: reading someone else's code. If you look through our code base, all I can say is good luck trying to decipher some of the components. Here is an example of one of our components that broke 1500 lines of code:

![Huge Amount of Code](Huge_Code.png)

This is part of the code for a part in our app that accesses a specific event, and displays its details: hands down, the most challenging part of our app. Our main issues with this page wre having to re-style this app numerous times, which if you could take a wild guess, is not easy with 1500+ lines of code to sift through. 

In retrospect we found as a group that our core functionality was easy to get moving an working as intended, but as the weeks passed we found ourselves constantly having to perfect said functionality. For example, our create-event functionality had to be re-vamped at least two to three thousand times but since day one, the core of its functionality has always worked. We found ourselves completing an assignment, but never truly completing it just because there was room to still hit perfection, which is definitely another challenge we faced as a group: things can always be done better, or faster. 

But I think as a whole, I am really happy to have worked with this group, and am proud of the work that was put into this project in the end.

---

PR List For this week:

- [Navigation Styling]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/106'): Had to re-style our navigation in mobile view, tablet, and added a couple of buttons from feedback

- [Fixing the Overwritten Styles from our Template]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/104'): From our landing page template, many of the styles were overwritten, so I had to sift through the css to fix and undo some of the styling that was messing up parts of our app

- [Making the Profile Page & Profile Settings Page Responsive]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/99'): Our Profile Page and Profile Settings Page needed to be made responsive after I made design changes following our feedback

- [Finishing Up the Landing Page]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/103'): I was assigned to finish our landing page with a simple template, this was a pain to get working!

- [Adding Our Photos to the Landing Page]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/117'): Just added our profile photos to our landing page