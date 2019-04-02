---
path: "/post-three"
date: "Apr 2"
length: "4 min"
title: "Labs II: A 2-week Retrospective"
author: "Jonathan Laluces"
description: "Despite only being in the second week of Labs, we sure have made quite a lot of progress as a group!"
---

## We're All In This Together
> It is amazing what you can accomplish if you do not care if who gets the credit - Harry S. Truman 

Throughout the Lambda School curriculum there are only two times where you end up coding as a pair/team, and thats when you: do a peer code review, or pair program on the homework. But for the past two weeks now, I have gotten to experience what its like working together with two or more people all at the same time and I have found that working together is not as easy as it seems.

---

## Solid Foundations

If you ever get to really know me, you will quickly realize I am not the social type whatsoever, and that transitions throughout not just my social life, but my `"professional"` life too. I am the king of awkward small talk, the prince of dead silence, and the jack of all trades when it comes to terrible social skills: I have it all.

But, the Labs program has really changed my lack of social skills for me, and it all started before the program officially launched for my cohort. We had to pick teams, kind of like middle school dodgeball really: you'd gather the friends you already knew, and then picked up some odd-ones-out along the way. Sure ,this time around I stuck with two friends and another partner we all got to know pretty well along the way, but we all had never worked as a team before so this was a new experience all-together.

The first afternoon that we all worked together, the assignment at hand (creating a design document) really emphasized all of us contributing our thoughts and discussing as a group the plans we had for the application we were going to be making for the next four weeks. By the time we finished half of the document, we found ourselves starting to solidify as a group, but `how could that be?`

I realized as a group, we would go around in a circle, taking in everyone's thoughts and ideas before we got to writing our answer for each section. Everyone made sure that each member felt just as important as the other and thats where we really started to become an actual group. I talked a little bit about communication in my last journal, and the point still stands: `communication is key`. Each team member has a voice, and you never know all the cool ideas another person could have.

---

## The Rough Parts

In life, nothing ever goes smoothly. There will always be a rough turn, a bumpy ride, and a slippery slope in any given situation, and our team-building is no exception. 

As the second week rolled around we were down to just four members (we originally had six, two of them had been moved out of our group), and this really forced us to get into the nitty-gritty of each others code. And there it was, a semi-confusing chunk of code was accidentally merged into our master branch, and it was totally my fault.

In retrospect, I should've had the code demo'd live before approving it because this would've avoided so many different issues. It gave a bad presentation of one of the member's abilities to code (which he is a very solid programmer), and soon made him feel alienated from the rest of the group. In a group, when one person messes up, we all mess up: it's a group effort all the way to the finish line.

After a quick meeting together with the team, we decided to not let anyone take the lone-wolf route when it came to the harder chunks of the application, and instead, tackle the beast together (whether it be in groups of two, or all four of us). We all know that as a team, we can conquer anything, so why let someone attempt it on their own and showcase faulty code, when as a group we can showcase something more amazing.

---

## Conclusion

At the end of the day, I have found that every single team member has something special other team members do not have. It could be: the way they think, their skills when it comes to presenting, the way they style their code, etc. 

But you would never know the special talents and abilities the member brings to the table without first giving them a chance to speak and make themselves known. Each voice should always be heard, no matter what contributions they have made, and no matter what `you` think about them. There is something I learned from my parents a long time ago, and they would always say:

> You cannot think and speak at the same time. But if you wait for your turn to talk, you will get a better grasp of the conversation and be able to contribute to that conversation in a much more impactful way.

---

[Front End Deployed Site.]('https://mock-up-d0d2d.firebaseapp.com/') -- Landing Page

[Front End Deployed Site.]('https://mock-up-d0d2d.firebaseapp.com/auth') -- Login Page

To see our front end pull data from the back end, click [this link]('https://mock-up-d0d2d.firebaseapp.com/events') after signing in / signing up.

PR's this week:

1. [Stripe Backend PR]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/16')
  - This is the PR I did to set up the backend routes for the API call that would take place on the front end
2. [Stripe Frontend Setup PR]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/19/files')
  - This is the PR I did just setting up the front end component to interact with the backend API
3. [Stripe Frontend / Backend Finalized PR]('https://github.com/Lambda-School-Labs/labs10-taco-run/pull/25')
  - This is the PR I pair programmed with Marshall, we worked on the front end component to correctly submit a request to the backend API and also had to refactor parts of the backend API (creating an "isPrem" boolean for users and then correctly formatting the data that gets passed to the Stripe API, and quering into the Database we made so we can apply membership to actual users in our database). This is a front end + back end PR