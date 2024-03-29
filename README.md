# mjdall
## What is it?
Small personal static site. I currently don't have much to show for what I can do web development wise. This is going to be that project where I can show partially some of my web development skills. Since it's not a project with any requirements per say, I'm just going to wing it, not care all too much about commit standards but just enjoy a small little project.

## Where is this deployed?
Hosted at [mjdall.com](http://mjdall.com)

## Scripts
All commands are run through npm, the commands are explained below. Call with `npm run <command>`.
* `build` - Builds the repository for static serving.
* `deploy` - For building and hosting via a docker container. Will be hosted on localhost (without specifying a port).
    * Also used to deploy and host on AWS.
* `develop` - Runs the repositroy for local testing - gatsby has hot reloading.
* `format` - Runs formatting on all javascript and react files in the repository.
* `start` - Justs runs develop at this stage.
* `serve` - Hosts the latest built code. Run `npm run build` to build first.

## Personal Notes / Partial Planning
* Learn [TypeScript](https://www.typescriptlang.org/)
    * I've only really watched small talks about TS
    * I've been meaning to learn it for awhile
    * ~~Going to set up gatsby and then get familar with TS~~
* Make the website jazzy
    * I've done a bit of css/scss animations, it's time to go overboard and learn a few more
    * Instead of CSS, use themes
    * Make a global react context which can be used for some cool effects
* Maybe try and incorporate some client-side machine learning?
* ~~Make a little logo for favicon and home button~~
* ~~Thinking of opting out of boostrap to try and style my own components~~
    * ~~Mainly so I can learn a bit more CSS than just relying on bootstrap theme + components.~~
    * Went with [Styled Components](https://www.styled-components.com)
* ~~Make it routable locally without going to localhost:8000~~
* Look into hosting via an s3 bucket
* ~~Figure out the best file structure for styled components~~
    * Not sure if it's the best but it works
* ~~Figure out the main layout so it's designed for adding new pages~~
* ~~Fix the width and height being slighly too big~~
* ~~Write a blurb about myself~~
    * Improve blurb about myself
* Actually have a proper landing page
* Write a blog post about making a static site for AWS
* Switch the theme to use a react context
* ~~Scale font according to screensize~~
    * Still need to scale header text properly
    * Still need to scale my about me photo properly

## ~~Framework Planning~~
* ~~[Next JS](https://nextjs.org/)~~
    * good for havging multiple pages on the site
    * i really want to learn this framework
    * i did start some boiler plate next js
* ~~[create-react-app](https://github.com/facebook/create-react-app)~~
    * have a single page that doesn't have any other routes.
    * i'm kind of leaning in this direction, however I do want to use a different framework other than create-react-app
* [Gatsby](https://www.gatsbyjs.org/) <- Actually used framework
    * quote from create-react-app: "If your website is mostly static (for example, a portfolio or a blog), consider using Gatsby instead."
    * podcast I listen to ([Syntax](https://syntax.fm/)) has mentioned Gatsby quite a bit
    * going to go with Gatsby

## Useful Links
* ~~[Gatsby Typography](https://www.gatsbyjs.org/docs/typography-js/) - Plugin for controlling fonts for the site.~~
    * Removed, just using a style component that adds default styling to page body
* Colours:
    * Gunmetal - #292F36
    * Magic Mint - #A1FCDF
    * Plantinum - #E6E6EA
    * Could be good if altered - [colours][https://coolors.co/ffc1cf-e8ffb7-e2a0ff-c4f5fc-b7ffd8]
    * Jet Black - #353535
