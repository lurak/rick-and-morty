# Rick and Morty Project

It is a web-site like a Google for Rick and Morty universe, where you can find every character or episode from series.
Although you can filter them by status and gender or a name of a character.
Project use https://rickandmortyapi.com.
Camel Case is used for variables.

# TODO

1. Maybe you can clean up default react README, e.g. starting from section "Read more"
2. There is some filtering bug: when nothing is returned from the fetch call (or error is returned), it should be reflected in the Characters List - show error text instead of elements
3. There is some small bug in pagination -- when you click on the last page button, the arrow should be disabled (currently I can click and I go to the next non-existing index). This is probably some error with list indexes :)
4. Please, fix some styles:

   - font sizes / font-family / font color in inputs
   - margins between Tags
   - add some margin-bottom under the Pagination
   - vertically align Rick & Morty's phrases on the same level with logo

5. Looks like you don't have pre-commit hooks, add them please.
6. Looks like you have linting errors, please fix.

# How to run a project?

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.