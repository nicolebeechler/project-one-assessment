# project-1-assessment

**Output:**
![my counter](https://i.imgur.com/6RFIuqM.png)

## GOAL
The goal of this final assessment is to gauge your ability to develop a minimal front-end web application using HTML, CSS & JavaScript, including your ability to:

- Write HTML that provides the application's overall structure and content.
- Use CSS to provide styling.
- Use JavaScript to:
    1. Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
    2. Select elements in the DOM.
    3. Listen for browser events, such as click, being dispatched by DOM elements.
- Manipulate a DOM element's content and style.

### The application's UI consists of:

- A count display
- Two buttons ("+" & "-")
- An `<input>` element

## Requirements

1. **Upon Loading**
    - When the application initially loads, the `<input>`'s value should be set to 1and the initial count of 0is rendered

1. **When the "+" Button is Clicked**
    - When the "+" button is clicked, the value entered in the `<input>` is added to the count and the new count value displayed.

1. **When the "-" Button is Clicked**
    - When the "-" button is clicked, the value entered in the `<input>` is subtracted from the count and the new count value displayed.

1. **Hovering Over the "+" or "-" Button**
    - When the mouse is over the "+" or "-" button, the button should reverse its background and text colors.

1. **BONUS**
    - As a bonus, display the count in red if it is a negative value!
    - You can also code for edge cases (for example, if someone puts a string in the input area)