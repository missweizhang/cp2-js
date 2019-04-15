# Creative Project 2 Specification
## Overview
For your second creative project, you will use what we're learning about JavaScript (JS) to
add interactivity a web page using the DOM and event handlers. As a creative project, you have 
freedom to have more ownership in your work, as long as you meet the requirements listed below.

As a reminder, assignments will alternate between creative projects (CPs) and more formal homework
assessments (HWs). We have designed assignments to support each of the 5 modules of this
course, and for creative projects to prepare you for the following HW in each module.

That said, we encourage you to explore the new material covered in class, as well as
related (but optional) content we may link to along the way, as
long as you follow the CSE 154 code quality guidelines. This is your chance to:

1. Continue to build a a websites that you can link to on your resume or code 
   portfolio (CPs can be public, most HWs cannot be).
2. Ask instructors and/or TAs about features you want to learn how to implement (we can
   provide more support for CPs than HWs) and ask for feedback/ideas on Piazza.
3. Apply what you're learning in CSE 154 to projects you are personally interested in and
   may use outside of just a CSE 154 assignment.
4. Optionally showcase your CP work on the CSE 154 19Sp CP showcase 
5. Get feedback on code quality when learning new technologies in CSE 154 to implement for
   the corresponding HW, which will be worth more points.

In past quarters, some students have built upon their Creative Project each week. You may
choose to do a new website for each CP, or build on a single project, as long as you meet
each CP's requirements.

## Ideas for CP2
As long as you meet the requirements outlined below, you have freedom in what kind of
website you create. For inspiration, check out some examples of projects in the past using JS on the [2018 Autumn showcase](https://courses.cs.washington.edu/courses/cse154/18au/creative/showcase.html#cp2)! Here are some ideas for Spring 2019 (your instructors are more than happy to help discuss more ideas in their office hours!):
* Continue to extend your portfolio page to add interactivity in some way. 
* Write something where you add or remove paragraphs or images to/from your page.
* Write a to-do list or an option list where you can add or remove items.
* Build a form that adds new features/options based on user input.
* Write a website to visualize data structures like arrays, lists, or maps.
* Write a website to solve math/science/etc. formulae.
* Implement a timeout/interval feature, etc. 
* Write a website to implement drag/drop features.
* You might find Section examples helpful for some inspiration! But your work must be your own - full credit will not be given to submissions that reuse most of the solutions from Section. For an example, [this CP](https://courses.cs.washington.edu/courses/cse154/18au/creative/cp2/abbazabba/index.html) (created by a student who is now a current TA!) was a creative extension of Thursday's Encrypt-It section exercise.

## External Requirements
* Your project must include the following three files (**with these names**) at a minimum:
  * `index.html` - main page of your website
  * `style.css` - file to style your `.html` file
  * `main.js` - containing your JavaScript code. You may have more than one JS file, but you will only be graded on those that are linked to your `index.html` file.
* Your website must contain at least one page using interactivity to respond to page
  events discussed in class. Specifically:
  1. Your site must respond to a page UI event (e.g. changes to a dropdown option or a button click, etc.) or a
     mouse or keyboard event (refer to **Keyboard Events** and **Mouse Events** from
     [here](https://developer.mozilla.org/en-US/docs/Web/Events)). The `load` event does not count for this requirement.
  2. At least one of your event handlers should change the DOM of the page in some way using `document.createElement`, `element.appendChild`, `element.removeChild`, or `element.replaceChild` 
  3. You must use JS to dynamically modify a `classList` of an element (add/remove a class that is defined in a linked CSS file).
* Make sure to test your webpage UI so that it works properly when a user interacts with page elements - you aren't expected to handle _all_ possible error cases, but part of your grade will come from being able to respond to an user event without an error.
* Tip: You can find a list of some different event types you can listen for 
  [here](https://developer.mozilla.org/en-US/docs/Web/Events) (not comprehensive) and post on 
  Piazza or go to Office Hours if you want to explore those not covered explicitly in class!
  * Your page should include
[school appropriate content](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#academic-conduct)
and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#copyright). If we find plagiarism in CPs or inappropriate content, **you will be ineligible for any points on the CP**. Ask the instructors if you're unsure if you're work is appropriate.
* Some students have asked about using JS libraries (e.g. jQuery). You may explore/use them with your submission (you can achieve some pretty cool features with them!), but note that their use will not count towards the CP requirements (no libraries are allowed in HW2, and we want to prioritize feedback for learning objectives in that HW).

## Internal Requirements
* When adding interactivity to your website, you should handle any events (like a mouse event, keyboard event, timer, etc.) 
  by responding them using a JavaScript function(s) in your `.js` file. 
* Your `main.js` file should be linked to your `index.html` or other `.html` files using 
   `<script src="...">` in the HTML `<head>`.
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute. 
* **IMPORTANT**: Moving forward (CP2 and beyond), we are requiring **all file names submitted to be in all-lowercase naming convention**. This means "-" are fine to separate words (e.g. "images/foo-bar.png" or "images/foobar.png"), but you may not have any uppercased characters in any file name, folder, or extensions used in your CP repository (e.g. "images/Foobar.png", "Images/foobar.png", or "images/foobar.PNG" all violate this requirement). This new requirement is to provide a clear and consistent convention across the class (and so that students on case-insensitive machines don't have to double-check manually that their files are matching). You do not need to worry about casing when linking to external websites/files (just make sure the links aren't broken).
* You should not have any JavaScript code in your HTML.
* You should not have any HTML tags as strings in your JavaScript code (e.g. `el.innerHTML = "<p>Foo</p>";`). Refer to the [Code Quality Guide](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/javascript/#unobtrusive-js) for more discussion.
* Minimize styling in JS - prefer adding/removing classes to DOM elements instead, and
  [style the classes in your CSS](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/javascript/#no-css).
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Your page should have a `window.addEventListener("load", functionName)` as shown in lecture/section (use an appropriate `functionName`).
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions. 
* Localize your variables as much as possible. You should not use any global variables (outside the [module pattern](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/javascript/#module-pattern)) as per the Code Quality Guide. 
* Only use module-global variables whenever absolutely necessary. Remember that as a CP, you have more freedom to explore and ask questions about your design decisions, so we encourage you to go to WPL/OH and use Piazza if you are unsure about whether something is a good module-global.
* Use `const` with `UPPER_CASED` naming conventions (instead of `let`) for program constants (e.g. a file path to your images if you are working with many images in your JS). Refer to the [Code Quality Guide](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/javascript/#variables-const) for more examples.
* Do not use the `alert` function, as it detracts from user experience and general accessibility.

## Style and Documentation
* Your HTML, CSS, and JavaScript should demonstrate good code quality as demonstrated in class and
  detailed in the [CSE 154 Code Quality Guidelines](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/). Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc. 
* Place a comment header in each file with your name, section, a brief description of the assignment, and the files contents. Examples: 


    HTML File:

    ```
    <!--
         Name: Mowgli Hovik
         Date: April 1, 2019
         Section: CSE 154 AB
         This is the index.html page for my portfolio of web development work. It includes links to side
         projects I have done during CSE 154, including an About page, a blog template, and
         a crytogram generator.
    -->
    ```

    CSS File:

    ```
    /*
        Name: Mowgli Hovik
        Date: April 1, 2019
        Section: CSE 154 AB
        This is the style.css page for my portfolio of web development work.
        It is used by all pages in my portfolio to give the site a consistent look and feel.
    */
    ```

    JS File: 

    ```
    /**
     * Name: Mowgli Hovik
     * Date: April 1, 2019
     * Section: CSE 154 AB
     * This is the JS to implement the UI for my cryptogram generator, and generate
     * different types of ciphers from user input.
     */
    ```

* Use [JSDoc](http://usejsdoc.org/) to properly document all of your JS functions with `@param`, `@returns` as discussed in the Code Quality Guide [here](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/javascript/#comments-function-header).
* HTML and CSS files must be well-formed and pass W3C validation. 
* Your JS code must pass [JSLint](https://oxford.cs.washington.edu/cse154/jslint/) with no errors. 
* To keep line lengths manageable, do not place more than one block element on the same line or begin a block element past the 100th character on a line.

## Grading
This CP will be out of 8 points and will likely be distributed as: 
* External Correctness (3 pts) - The external requirements listed in this document are met. 
* Internal Correctness (3 pts) - The internal requirements listed in this document are met. 
* Style and Documentation (2 pts) - The style and documentation requirements in this document are met.  

## Late Day Challenge
You can earn one extra late day if your JavaScript includes either `setInterval` and `setTimeout` appropriately (`setInterval` to repeat a function, `setTimeout` to execute the function exactly once after a delay). The function(s) must be non-trivial (e.g. it must be possible that the DOM could be updated as a result of the function; a function with single `console.log` statement would be considered trivial).