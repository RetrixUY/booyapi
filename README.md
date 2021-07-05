# A boilerplate for your tiny typescript library you want to publish as a npm module without a lot of headache caused by setting all up

*It doesn't use **Webpack** at all, all code will be compiled by **Typescript** compiler.*

### Source code
All source code should be placed within the `/src` directory. The entrypoint for compilation is the `/src/index.ts` , so everything Typescript won't be able to reach will not be presented in the resulted output js code.
Babel is used only for transpiling a js code for Jest in some cases. 
### Test
Jest is configured, so test written for this widely spreaded test framework will be supported.
The command `npm run test` or `yarn test` will run all tests.
### Linting and formatting
Linter and prettier are configured mostly by the [Google utility](https://github.com/google/gts) . So Google code style is used by default and all automatic code-style and formatting fixes will be done according to it.
You can run `npm run fix` or `yarn fix` to run autofix of the whole source code under the `/src` directory.
### Library documentation
If you want to have some docs it can be done automatically by your TS source code and JSDoc comments (in case you want to make your code more clear for understanding).
It uses `typedoc` module and `typedoc-plugin-markdown` plugin for it, so the documentation auto generated into Markdown format and can be easily readden by users gist on Github.
You can run `npm run docs` or `yarn docs` and the documentation will be auto generated and placed into the `/docs` directory.
### Build
All compiltations/transpilarions are done only by Typescript. So if you have a complex solution it might be necessary to use Webpack instead and this boilerplate should be tuned up by you. But in case you want to publish a library without a lot of dependencies it should be ok to use this boilerplate for your needs.
A resulted code will be placed into the `/es` directory. So if one decide to use your code is hould be imported as `your_library_name/es/some_part_of` in case you don't have this part exported from `/src/index.ts`. E.g. `import {utility} from 'your_library/es/utilities'`.
In case you have that part exported from the entrypoint file `src/index.ts` it will be able to be imported just as easy as `import {utility} from 'your library'`.
To buld your project you need to run the task by the following commands: `npm run compile` or `yarn compile`. 
Before a process of compilation there will be a couple of checks runned, like tests, linting, etc.
### Publishing
You have to change the `package.json` file with your own libraries details.

 1. *name* - a name of your package,
 2. *version* - a current version of your package,
 3. *description* - a short description what your package for,
 4. *engines* - e.g. under which versions of Node.js it can be runned,
 5. *repository* - a repository where a source code is based,
 6. *keywords* - a number of keywords describing your package,
 7. *author* - this section is about yorself,
 8. *license* - change it if you want to use something different to MIT license,
 9. *bugs* - an url where issues might be found out,
 10. *homepage* - an url of a library's homepage
 11. *files* - only files which are listed under this field's list will be published to npm,

After filling in all those fields in `package.json` you may run the command `npm publish` for publishing your package on the npmjs.com website's catalogue and also it will let anyone to install this with `npm install your_package_name` or `yarn add your_package_name`.