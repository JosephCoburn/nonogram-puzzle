# Project 1 - Peer Code Review Checklist

### Developer: ____Joseph Coburn_______
### Reviewer: ______Self_______________
---

## Minimum Requirements

### Features
- [X] Game has at least the minimum set of features required to play.
- [X] All minimum features are working.
- [X] As applicable, does the game handle "winning", "losing" and "ties"?

### Code Style & Best Practices
- [X] No "dead" code (code that is commented out code or is never executed) exists.
- [X] There are separate CSS & JS files put in appropriate sub-folders.

#### JavaScript
- [X] Function names accurately express their purpose (usually verbs).
- [X] Variable names are clear and expressive (usually nouns).
- [X] Identifiers used for variables and functions (except constructors) use camel-casing.
- [X] Constructor functions use upper-camel-casing.
- [X] JavaScript code blocks, nested functions, etc., are consistently indented using 2 or 4 spaces per level of indentation.
- [X] Vertical white spacing is consistent.
- [X] Use of single vs. double quotes for strings is consistent (lean toward single quotes).
- [X] No leftover logging to the console.

#### HTML Markup
- [X] The HTML is properly indented according to its nesting level.
- [X] Lower-case is used for all tag names, attributes, classes & ids.
- [X] Kebob-casing is used for names of classes, ids, and custom attributes (if any).
- [X] No spaces exist between HTML attributes, the equal sign and the value.
- [X] HTML attributes use double quotes.
- [X] Inline styling is not used.

#### CSS
- [X] The CSS is properly indented.
- [X] Vertical white space is consistent.
- [X] There is an opening curly brace after the selector(s) and a closing brace on the last line by itself.
- [X] CSS properties contain a space after, but not before, the : character.

### Documentation & Deployment
- [X] Game is deployed online (GH Pages).
- [X] Repo contains a _readme.md_
- [X] _readme_ has a _Description_ section for the game.
- [X] _readme_ has a _Technologies Used_ section.
- [X] _readme_ has a _Getting Started_ section which includes a link to the deployed game.
- [X] _readme_ has an _Next Steps_ section to explain unsolved problems and future plans.

## Other Conventions & Best Practices

### Files
- [X] File names are lowercased and use either snake or kebob-casing.

### JavaScript
- [ ] Functions rarely contain more than 10 lines and do so for good reason.
- [X] Code is DRY by ensuring there are not sections of similar code.  Repetitive code is put into more general purpose functions defined with parameters as necessary to differentiate their behavior.
- [X] The main script file is commented into major sections for:
	- Application-wide Variables & cached DOM Element Variables
	- Constants (all upper-case identifier is used by convention)
	- Event Listeners
	- Functions
- [X] Application-wide scoped variables are declared at the top of the main script file.
- [X] An _initialize_ or similar function is used to "reset" the variables of the game to their starting state.  Variables are not also being initialized when defined.

### HTML
- [X] HTML passes [w3c validation](https://validator.w3.org/)

### CSS
- [X] CSS is kept DRY by breaking out common CSS properties into separate classes.


