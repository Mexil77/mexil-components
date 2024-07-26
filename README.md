# Components library template.

This repository is a template to create library components for a React project in TS.

The project worked with many technologies to help with the development and testing of the component and pre-configuring deploy configuration in the public package npm, ready to start using it in your project.

## Tecnologies

- [Vite](https://vitejs.dev/)
- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [vitest](https://vitest.dev/)
- [jest](https://jestjs.io/) (integrated in vitest)

## Clone repo

```bash
git clone https://github.com/Mexil77/mexil-components.git
```

You can use the ssh link to.

```bash
git clone git@github.com:Mexil77/mexil-components.git
```

But if you don understand what ssh is, it's a good idea to know it.

- [ssh](https://www.techtarget.com/searchsecurity/definition/Secure-Shell)
- [ssh github windows config](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Windows-Example)
- [ssh github macOS config](https://gist.github.com/DakotaLMartinez/baa81e7f00fa8eb68d9dbcab69f5b762)

Now change to componenetTemplate

```bash
cd mexil-components
git checkout componenetTemplate
```

Now if you want to synchronize with your repo in production, DevOps or personal repo.

### Link remote repo

For that, we have 2 ways to do that, but first we need to link the remote repo to this local repo.

```bash
git remote add [name of remote tag] [link of your remote repo (http or ssh)]
```

An example of that:

```bash
git remote add origin https://github.com/eslint/eslint.git
```

> In this example, I used **origin** in the _name remote tag_ because that is the default tag when you clone a repo, but feel free to change it to whatever you want to write, for example, **workRepo**. In that case the commands to pull or push changed to for example
>
> - _git push **workRepo** master_

Now we link our remote repo to our local repo, and we can't check this easily with this command

```bash
git remote -v
```

The result must be something like this:

> origin [link of repo] (fetch)
>
> origin [link of repo] (push)

Here we have 2 scenarios, the empty repo or the repo with initialized historic.

1. The first scenario is the easiest; we could just push the changes with the command, and it's done

```bash
git push origin master
```

2.  In the second scenario, it's a little more difficult, we have to relate the histories, and for that, we're going to follow the next steps.

### Relation unrelationed historics.

Now here is the difficult part because git understand the local repo and the remote repo have 2 histories unrelated, even when your remote repo has just a README file.

> **Important**
>
> It's very common to have conflicts in this step, you will need to solve that to continue because it depends on the remote repo and their files.
>
> To have fewer conflicts, clean the remote repo before you do this step.

So first, we try to pull the history of the remote repo with this command

```bash
git pull origin master --allow-unrelated-histories
```

> Usually **master** is the principal branch in the new repos, but sometimes master is changed for **main** so you just have to change the branch you want to pull
>
> - _git pull origin **[name of remote branch]** --allow-unrelated-histories_

After you have resolved the conflicts, you are ready to push changes into the new repo.

```bash
git push origin [branch name]
```

Or for a different name in remote

```bash
git push origin [local name branch]:[remote name branch]
```

example

```bash
git push origin master
```

or

```bash
git push origin master:main
```

## Test default configuration

First, you need to install all de dependencies with

```bash
npm i
```

After that, we could test all the scripts

### Scripts

We have many scripts to format code and more things, but the important ones are

- storybook
- test
- coverage
- build

All these scripts run with

```bash
npm run [name script]
```

example

```bash
npm run test
```

Lets describe each one

- **storybook**

  This script will run the storybook library. Whoever opens a browser tab running on localhost:6006, that shows you all the information about the components, you can check and modify this information in the \*.stories.tsx file stored in the directory of each component. The directory of each component is in _src/components_

  it's important to know you are not modifying the component, just the story file, that the storybook uses to display how the component works in real time, modifying the props you pass in the storybook browser tab.

  If you want to modify the component, you need to modify the index.tsx in the same directory, and automatically you will see the change in the browser.

- **test**

  This script will open a browser tab running in localhost:51204, that opens a vitest interface, where you can't track all the unit tests more visually and comfortably.

- **coverage**

  If you want something more classic, this script will run the classic coverage with Jest and generate the coverage directory, which stores the index.html where is the graphic analytic.

  You can run the next command to open a browser tab with the information mentioned

  ```bash
  open coverage/index.html
  ```

- **build**

  At the end, but most importantly, the build script allows us to create the dist directory, which is the container of all the code typed to be uploaded to your DevOps server or published in NPM

## Edit and update library

### Create new component

To create a new component named _NewComponent_ for example, you just need to create a new folder in components directory with the basic structure of files:

- index.tsx
- NewComponent.stories.tsx
- NewComponent.test.tsx
- styles.module.scss

```bash
  📂 src
  ├─ 📂 components
  │  ├─ 📂 MxButton
+ │  └─ 📂 NewComponent
+ │     ├─ 📄index.tsx
+ │     ├─ 📄NewComponent.stories.tsx
+ │     ├─ 📄NewComponent.test.tsx
+ │     └─ 📄styles.module.scss
  ├─ 📂 globalStyles
  ├─ 📄main.ts
```

> If it's true that the only files necessary to make a new component are the **index.tsx** and **styles.module.scss**, it could be a good practice to make the test and present work for the component with the other files to help other developers to understand the project.

- To configure the stories for the storybook, you can check the [doc of Storybook](https://storybook.js.org/docs/get-started/whats-a-story).

- To make the unit test in Jest, you could check the [doc of Jest](https://jestjs.io/es-ES/docs/getting-started) and the [doc of vitest](https://vitest.dev/guide/) if you want to use the software to test.

After finishing your component, applying the styles, making the configuration of the presentation in the storybook, and making the unit test, you are ready to deploy.

## Build

To build, we will use the script mentioned in the **scripts** part, to generate the dist folder, which will be the directory we upload to install after in any project.

```bash
npm run build
```

After the process is finished, you can check that all the components are in the dist folder ready to export, so you just need to publish it.

If you need a special configuration because it is a private system of packages, you will need to add that configuration and the script to run that configuration.

But if you want to publish your package publicly, just run the next command

```bash
npm publis
```

This command will try to publish the package in [NPM](https://www.npmjs.com/) publicly to the community.

> it's **important** remark you will need an **npm account** and logued in to publish

If all it's well, you will be the name will follow the version of the package that matches the name and version in the **package.json**.

If you want to change the name or update the version of the package, you just have to modify the name or update the version in the **package.json**

package.json

```json
{
  "name": "comoponents-template", ⬅️
  "private": false,
  "version": "0.0.1",             ⬅️
  "type": "module",
...
}
```
