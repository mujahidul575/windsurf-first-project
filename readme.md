# Installation Guideline

You need to install package files/dependencies for this project if you want to customize it. To do this, you must have **Node.js** and **npm** installed on your computer. The installation guide for Node.js can be found [here](https://nodejs.org/en/). As **npm** comes bundled with **Node.js**, a separate installation of **npm** is NOT needed. Once Node.js and npm are installed, follow these steps:

### Install Dependencies
Go to the root folder of the project and run the following command in your command prompt or terminal:

```bash
npm install
```
Run a command to run Gulp. When you run this command, it also watching at all source and static files. So, you don't need to run another command to watching these.

```bash
npm run dev
```

If you want, just watch the source files. You can run another individual command.

```bash
npm run dev watch
```