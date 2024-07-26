# Components library template.

This repository is a template to create a library componenets for React project in TS.

The project work whit many tecnologies to help the develop and test the component and pre configuring deploy configuration in public package npm ready to start using it in your proyect.

## Tecnologies

- [Vite](https://vitejs.dev/)
- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [vitest](https://vitest.dev/)
- [jest](https://jestjs.io/) (integrated in vitest)

## Clone repo

I can understand that you don't want to have the history of this repository in your project, as sad as that sounds, so let's clone it and initialize a new one as a first step

```bash
git clone https://github.com/Mexil77/mexil-components.git
```

You can use the ssh link to.

```bash
git clone git@github.com:Mexil77/mexil-components.git
```

But if you don understand what ssh is, its a good idea to know it.

- [ssh](https://www.techtarget.com/searchsecurity/definition/Secure-Shell)
- [ssh github windows config](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Windows-Example)
- [ssh github macOS config](https://gist.github.com/DakotaLMartinez/baa81e7f00fa8eb68d9dbcab69f5b762)

Now change to componenetTemplate

```bash
cd mexil-components
git checkout componenetTemplate
```

Now if you whant to sincronice whit your repo in producction, devops or personal repo.

### Link remote repo

For that we have 2 ways to do that, but first we need to link the remote repo to this local repo.

```bash
git remote add [name of remote tag] [link of your remote repo (http or ssh)]
```

An example of that:

```bash
git remote add origin https://github.com/eslint/eslint.git
```

> In this example i used **origin** in _name remote tag_ because is the defauld tag when you clone a repo, but feel free to change to what every you want to write, for example **workRepo**, in that case the commants to pull or push changed to for example
>
> - _git push **workRepo** master_

Now we link our remote repo in our local repo and we cant check this easly with this comand

```bash
git remote -v
```

The result must be something like this:

> origin [link of repo] (fetch)
>
> origin [link of repo] (push)

Here we have 2 esenarios, the empty repo or the repo whit initialiced historic.

1. The first escenario is the easylis, we could just push the changes whit the command and its done

```bash
git push origin master
```

2.  The second escenario, its a little more dificult, we have to relation the historics and for that we going to follow the next steps.

### Relation unrelationed historics.

Now here is the dificult part because we git understand the local repo and the remote repo have 2 histories unrelacionated, even when your remote repo have just a readme file.

> **Important**
>
> Its very commun have conflicts in this step, you will need to solve that to continue because depends of the remote repo and their files.
>
> To have less conflicts clean the remote repo before you do this step.

So first we try to pull the history of the remote repo whit this comand

```bash
git pull origin master --allow-unrelated-histories
```

> Usualy master are the prinsipal branch in the new repos but sometimes master are changed for **main** so you just have to change the branch you whant to pull
>
> - _git pull origin **[name of remote branch]** --allow-unrelated-histories_

After you have resove the conflicts you are ready to push changes in new repo.

```bash
git push origin [branch name]
```

or for diferent name in remote

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

Firts of all you need to install all de dependencies with

```bash
npm i
```

After that we could test all the scripts

### Scripts

We have many scripts to format code and more things, but the importants are

- storybook
- test
- coverage
- build

All this scripts run with

```bash
npm run [name script]
```

example

```bash
npm run test
```

Lets describe each one

- **storybook**

  This script will run the storybook library open a browser tab runing on localhost:6006, that show you all the information about the components, you can check and modify this information in the \*.stories.tsx file stored in the directory of each component, the directory of each component are in _src/components_

  Its important to know you are not modifing the component just the story file, that the storybook use to display how the component works in real time, modifing the props you pass in the storybook browser tab.

  If you whant to modify the component, you need to modify the index.tsx in the same directory and automatically you will see the change in the browser.

- **test**

  This script will open an a browser tab running in localhost:51204, that open an vitest interface, where you cant track all the unit test more visualy and comfortable.

- **coverage**

  If you want something more classic this script will run the clasic coverage with jest and generate the coverage directory who store the index.html where is the graphic analitic.

  You can run the next comand to open an a browser tab with the information mentioned

  ```bash
  open coverage/index.html
  ```

- **build**

  At end but most important the build script allow us to create the dist directory that is the container of all the code typed to be uploaded to you devops server or be publish public in npm

## Edit and update library

### Create new component

To create a new component named _NewComponent_ for example just need to create a new folder in components directory with the basic structure of files:

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

> If its true the only files necesary to make a new component are the **index.tsx** and **styles.module.scss**, could be a good practice make the test and present work for the component with the other files to help other developers to understand the project.

- To configure the stories for the storybook you can check the [doc of Storybook](https://storybook.js.org/docs/get-started/whats-a-story).

- To make the unit test in jest you could check the [doc of Jest](https://jestjs.io/es-ES/docs/getting-started) and can check [doc of vitest](https://vitest.dev/guide/) to help if you whant to use the softwete to test.

After finish your component, aply the styles, make the configutarion of the presentation in storybook and made the unit test, you are ready to deploy.

## Build

To build we will use the script mentionated in the **scripts** part, to generated the dist folder, that will be the directory we upload to install after in any proyect.

```bash
npm run build
```

After the process finish, you can check all the components are in the dist folder ready to export, so just left publish.

If you need and special configuration because is an private sistem of packages, you will need to add that configuration and the script to run that configuration.

But if you whant to publish your package publicly, just run the next comand

```bash
npm publis
```

This comand will try to publish the package in [npm](https://www.npmjs.com/) publicly to the comunity.

> Its **important** remark you will need an **npm account** and logued in to publish

If all its ok, you will be the name follow the version of the package that match whit the name and version in the **package.json**.

If you want to change the name or update the version of the package just have to modify the name or update the version in the **package.json**

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
