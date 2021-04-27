# How many days old?

This was the [scrimba challenge](https://scrimba.com/learn/weeklychallenge/the-weekly-web-dev-challenge-how-many-days-old-latest-challenge-cE2gBNC2) on the fourth week of April 2021. The aim of the task was to calculate the number of days from the date of birth to the present date. The HTML and the CSS was provided so all the work was to be put into Javascript.

I am using this opportunity to learn more about creating a github repo and well as learning and using Markdown to explain the challenge and my solution.

## Research

- [Input type = date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date): this was used to  figure out how this input type works. 
- [Date and time formates used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#format_of_a_valid_date_string): This helped to figure out how to calculate the number of days. It was very useful for including leap years.
- [Numbers and dates in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object). This areticle was helpful in pointing out that 
    > Calling Date without the new keyword returns a string representing the current date and time.
- [Content Jumping (and How to avoid it)](https://css-tricks.com/content-jumping-avoid/): It helped me understand that I needed to scale in the extra elements I add during the initial rendering. This 

## issues 

- There was no class set on the button element so I had to use [getElementByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName). This however led to another issue which was that unlike eventSelector it got a HTML Collection which is like an array. In this case I had to return the first item on the array which is for the variable so I could add an event listener to it. I always could have added the class via Javascript 🤔
```
let calcBtn = document.getElementsByTagName('button')
calcBtn[0].addEventListener('click', calculateDays);
```
- Figuring out a formula for calculating days. I was initially thinking of creating a loop that would go through the number of days each year then calculate but the [Numbers and dates] on MDN said that  

    > JavaScript handles dates similarly to Java. The two languages have many of the same date methods, and both languages store dates as the number of milliseconds since January 1, 1970, 00:00:00, with a Unix Timestamp being the number of seconds since January 1, 1970, 00:00:00.

Combining this with the way to calculate the number of milliseconds in a day, shown below, meant that it was possible to calculate the days between a set birthday and the current day. 
```
    let msPerDay = 24 * 60 * 60 * 1000;
```
- Movement of the boxes with the addition of the new Div with the total days since the DOB. I found this article on CSS-Tricks on [Content Jumping (and How to avoid it)](https://css-tricks.com/content-jumping-avoid/). It really didnt answer my question. The issue for me was that when I added the text the other elements would shift. To avoid this I just needed to add a height to the element when it was initially being rendered.

## Further improvements 
- I need an if then statement in case the Go button is pressed without a date being put in. 
- Workaround for safari browser. I am not sure how to emulate this issue but it is [documented on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#handling_browser_support) with a possible work around.


