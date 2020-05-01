# ESLint and Jest reporting
## Goal of this repo

This repo offers an example of configuring eslint to run when running `npm test`, as well as a few test reporting libraries.

## ESLint on npm test

When running `npm test`, There is a `pretest` script that will run before `test` if the `pretest` script exists. In this case, I set `pretest` equal to `eslint ./src/**/*.tsx`, which will run eslint on all `.tsx` files in `src` and it subdirectories.
Fun fact: there is also a `posttest` script that runs after `test`.

## ESLint in VS Code

The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) will use your `.eslintrc` file to lint files as you type. You can also get it working with `Prettier` with the following `npm` dependencies (which are installed in this project):

- `prettier`
- `eslint-config-prettier`
- `eslint-plugin-prettier`

...and then you need to add the following to your `.eslintrc.json`:

```
{
  "extends": ["plugin:prettier/recommended"]
}
```

All of this was taken from the following resources:

- https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
- https://medium.com/@haykerman/setting-up-eslint-prettier-for-react-app-in-vscode-8662de2d9a96

**Note**: There are some linting rules that require a change in _both_ the `.eslintrc.json` and the `.prettierrc` files, which should both be in the root of your project. One such change is if you want to use single quotes instead of double quotes for strings. This can be a little annoying keeping the two files consistent, but it seems there is no other option for getting the two working together at the moment.

## Test reporting libraries

The 3 libraries demoed here are [jest-sonar](https://www.npmjs.com/package/jest-sonar), [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter), and [jest-stare](https://dkelosky.github.io/jest-stare/). `Jest-html-reporter` and `jest-stare` both generate html-style reports, while `jest-sonar` generates a Sonar-style xml report. The reports for this project are generated in the `build` directory and are named as follows:

- `jest-sonar`: `jest-sonar-report.xml`
- `jest-html-reporter`: `test-report.html`
- `jest-stare`: This has multiple files and directories, including:
  - `jest-results.json`
  - `index.html`
  - `js/`
  - `css/`

In order to use test reporters with `jest`, we must `eject` our `create-react-app` application. This just requires that you run `npm run eject`, documented below in the default `create-react-app` section. Essentially, this is a one-way operation that exposes all of the configurations that come with `create-react-app`, allowing you to edit certain configurations that could not be changed otherwise. One such configuration would be the `reporters` jest config.

In the `jest` section of the `package.json` in this file, you can see how to configure test reporters in a React project. It is recommeded that you keep the `default` reporter in addition to any that you decide to add, as shown in this project.


## Create-react-app default section

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
