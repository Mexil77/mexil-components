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

## Confing Repo

### Clone repo

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

Now the next steps is for prepare the new empty repository

```bash
cd mexil-components
git checkout componenetTemplate
rm -rf .git
git init
git add .
git commit -m "first commit"
```

> Its important change the branch to **componenetTemplate** before delete .git file, otherwise you coudnt access to all code

Now you have your new repo in local we need to sincronice whit your repo in producction, devops or personal repo.

### Link remote repo

For that we have 2 ways to do that, but first we need to link the remote repo to this local repo.

```bash
git remote add [name of remote tag] [link of your remote repo (http or ssh)]
```

An example of that:

```bash
git remote add origin https://github.com/eslint/eslint.git
```

> In this example i used origin in name remote tag because is the defauld tag when you clone a repo, but feel free to change to what evere you want to write, for example **workRepo**, in that case the commants to pull or push changed to for example
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

Firts of all you need to install all de dependencies whit

```bash
npm i
```

After that we could test all the scripts

### Scripts

We have mane scripts to format code, but the importants are

- storybook
- test
- coverage
- build

All this scrits run whit

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

  Its important to know you are not modifing the component just the story file, that the storybook use to dosplay how the component works in real time, modifing the props you pass in the storybook browser tab.

  If you whant to modify the component, you need to modify the index.tsx in the same directory and aoutomaticly you will see the change in the browser.

- **test**

  This script will open an a browser tab running in localhost:51204, that open an vitest interface, where you cant track all the unit test more visualy and comfortable.

- **coverage**

  If you want something more classic this script will run the clasic coverage with jest and generate the coverage directore where you can see the index.html where is the graphic analitic.

  You can run the next comand to open an a browser tab whit the information mentioned

  ```bash
  open coverage/index.html
  ```

- **build**

  At end but most important the build script allow us to create the dist directory that is the container of all the code typed to be uploaded to you devops server or be publish public in npm

## Edit and update library

### Create new component

To create a new component just need to create a new folder in components directory

```bash
📂 - src
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
