#### 这个是雅诗兰黛的面试前的code challenge，整个题目出的很不smart，因为React采用声明式的编程范式，但是给你的代码template却让你用命令式的方式去封装组件。我随便搞了搞就交了。面试那天，提前半小时到公司，结果他们硬生生让我坐了半小时才开始面试，中间连杯水都没有。他们开会，一个小老弟说“我让Devops去扩容了，页面还是加载不出来”。面试过程中呢，一个资历较低的小姑娘，问页面如果一定loading，加载不出来，是什么原因。各种面试内容反映出，整个团队水平略低，在一个初级阶段，页面加载不出来，跑过去找Devops扩容。都没想过是不是代码写的有问题呢？

#### 这面试题放出来，自己看看吧，自己卷去吧。十个人左右研发工程师的公司，张嘴招个外包，眼光高的好像不得了，实际上又解决不了问题。Too Low！

# ELC Front-end Code Challenge 

1. Before coding
    * Step_1: install all dependencies.
    * Step_2: run `npm start` or `yarn start` to build a local server.
    * Step_3: visit http://localhost:3000/ to check the website is working.


2. Requirement:
    * We need a global popup method.
    * When we call this method, a notification will show up in top-right of the screen. and disappear automatically after 3 seconds.
    * When you call it several times, all notifications will list in top-right of the screen.
    * Make the notification looks like the [Alert component in MUI](https://mui.com/material-ui/react-alert/), without installing MUI.
    * Please don't leverage any third-part module.

3. Nice to have:
    * Unit test.
    * Add debounce for click event (0.5s).
    * Expand it to handle more business scenarios, based on your experience.

4. We hope see:
    * Clear code and logic.
    * Self-explain code and comments.
