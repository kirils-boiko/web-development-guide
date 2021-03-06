# Web Development Guide

<p align="center">
    <img width="735" height="325" src=http://www.cinemazed.be/img/summerwars2581_L.jpg>
</p>
         

> A comprehensive guide to becoming a self-taught backend software developer.
> Guide is presented in the form of a short to-do list.

## Intro

This is a step-by-step guide for becoming a self-taught backend software developer with no/little previous experience in the field.
It covers various topics ranging from the basics of the Internet to the programming languages required (i.e., this guide focuses on JavaScript).
I intend to continuously update the guide as I venture out into the world of software development.
Inspired by the [step by step guide to becoming a modern backend developer in 2021](https://roadmap.sh/backend).

Another [short guide for beginners](https://www.upwork.com/resources/beginners-guide-back-end-development).\
Recommended: [Practical 2021 web development guide](https://www.youtube.com/watch?v=VfGW0Qiy2I0&ab_channel=TraversyMedia)

---

## Table of Contents

- [Intro](#intro) 
- [Web Development Courses](#-web-development-courses)
- [Projects](projects)
- [What is Internet?](#what-is-internet)
- [Frontend basics](#frontend-basics)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
- [Server Side Programming Languages: Java](#server-side-programming-languages-java)
    - [Java Core](#java-core)
    - [Servlets and JSPs](#servlets-and-jsps)
    - [Spring Framework](#spring-framework)
    - [Spring MVC](#spring-mvc)
    - [Hibernate](#hibernate)
    - [Spring Boot](#spring-boot)
- [Server Side Programming Languages: JavaScript](#server-side-programming-languages-javascript)
    - [Express.js](#express.js)
- [Version Control](#version-control)
    - [Git](#git)
    - [GitHub](#github)
- [Databases](#databases)
    - [SQL (Relational) Databases](#sql-(relational)-databases)
    - [NoSQL Databases](#nosql-databases)
    - [ORMs](#orms)
    - [ACID](#acid)
    - [Transactions](#transactions)
    - [N+1 Problem](#n+1-problem)
    - [Database Normalization](database-normalization)
    - [Indexes](#indexes)
- [APIs](#apis)
    - [Authentication](#authentication)
    - [REST](#rest)
    - [JSON](#json)
    - [SOAP](#soap)
- [OS and General Knowledge](#os-and-general-knowledge)
    - [Basic Networking Concepts](#basic-networking-concepts)
    - [Terminal Usage](#terminal-usage)
    - [Workings of OSs](#workings-of-oss)
    - [Process Management](#process-management)
    - [Threads and Concurrency](#threads-and-concurrency)
    - [Memory Management](#memory-management)
    - [Interprocess Communication](#interprocess-communication)
    - [I/O management](#i/o-management)
    - [POSIX Basics](#posix-basics)
- [Continuous Integration](#continuous-integration)
    - [Test Coverage](#test-coverage)
    - [Code Analysis](#code-analysis)
    - [Unit Test](#unit-test)
- [Cloud services](#cloud-services)
    - [Firebase](#firebase)
    - [AWS](#aws)

## Web Development Courses
- Instead of going through the frontend basics and some parts of the rest materials, you can opt for all-in-one courses. Pick one:
- [ ] [Harvard's CS50 Web Programming Course](https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&queryID=b6de299433c099a0273976b82adf7d23&position=2)
- [ ] [Frontend Masters' 21-hour Bootcamp](https://frontendmasters.com/bootcamp/?utm_source=css-tricks&utm_medium=website&utm_campaign=css-tricks-blog-post)

## Projects
- Once you are comfortable with fundamentals, come back here to start working on your own projects - this way you learn faster!
- Check one of these:
    - [ ] Projects from [freeCodeCamp](https://www.freecodecamp.org/)
    - [ ] Udemy's course [50 Projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/)

## What is Internet?

- Nothing to implement. Watch enough videos until you understand it well enough.
- [How Internet Works (videos)](https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7&ab_channel=Code.org)

## Frontend Basics

- ### HTML
    - Make sure you understand the basics of HTML 5 page structure and semantic tags   
    - [x] [Introductory Article](https://html.com/)
    - [x] Pick one: 
        - [ ] [Tutorial for Beginners from Mosh Programming (video)](https://www.youtube.com/watch?v=qz0aGYrrlhU&ab_channel=ProgrammingwithMosh)
        - [x] [Tutorial for Beginners from Clever Programmer (video)](https://www.youtube.com/watch?v=FNGoExJlLQY&ab_channel=CleverProgrammer)
        - [ ] [Tutorial for Beginners from Traversy Media (video)](https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&ab_channel=TraversyMedia)
    - [ ] Pick one:
        - [ ] [Comprehensive 9-hour Tutorial from W3 Schools](https://www.w3schools.com/html/html_intro.asp)
        - [ ] [Comprehensive 9-hour Tutorial from CodeAcademy.org](https://www.codecademy.com/learn/learn-html)
        - [ ] [Tutorial from Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css)
   
- ### CSS   
    - Make sure you understand the basics of:
        - [x] CSS Styling (colors, fonts, spacing, margins, padding)
        - [x] Positioning (absolute, relative, fixed)
        - [x] Alignment (Flexbox and/or CSS Grid)
        - [ ] Responsive Design / Media Queries
    - [x] [Cool 3-hour Tutorial from Clever Programmer (video)](https://www.youtube.com/watch?v=KN6oBEOz2ZI)
    - Look into the basics of main CSS framework, Bootstrap:
        - [x] [Introduction to Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
    - Flexbox web layout:
        - [x] [Comprehensive Guide to Flexbox Layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    - Useful sources:
        - [W3 Schools CSS Reference](https://www.w3schools.com/cssref/) 

- ### JavaScript
    - Make sure you have a good understanding of:
        - [x] Basics (variables, arrays, functions, loops, etc)
        - [x] DOM & Styling (selecting and manipulating elements)
        - [x] Array Methods (foreach, map, filter, reduce, etc)
        - [x] JSON (JavaScript Object Notation)
        - [ ] HTTP Requests (Fetch API - GET, POST, PUT, DELETE)
    - [x] [Cool 8-hour Tutorial from Clever Programmer (video)](https://www.youtube.com/watch?v=Qqx_wzMmFeA)
    - Useful sources:
        - [MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
        - [Huuge playlist on Vanilla JavaScript from Traversy Media (videos)](https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&ab_channel=TraversyMedia)

## Server-side Programming Languages: Java

- ### Java Core
    - Make sure you understand:
        - [x] Object Oriented Programming
            - [x] [Inheritance](https://stackify.com/oop-concept-inheritance/)
            - [x] [Composition](https://stackify.com/oop-concepts-composition/)
            - [x] [Encapsulation](https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/)
            - [x] [Polymorphism](https://stackify.com/oop-concept-polymorphism/) 
        - [x] Generics
            - [x] [What Is Java Generics?](http://www.angelikalanger.com/GenericsFAQ/FAQSections/Fundamentals.html#What%20are%20Java%20generics?)
            - [x] [Java Generics FAQ by Angelika Langer](http://www.angelikalanger.com/GenericsFAQ/JavaGenericsFAQ.html)
            - [x] [Oracle's Tutorial On Generics](https://docs.oracle.com/javase/tutorial/java/generics/)
        - [x] Concurrency APIs
            - [x] Multithreading
                - [x] [What Is Multithreading?](https://www.tutorialspoint.com/java/java_multithreading.htm) 
                - [x] [Locks](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/locks/Lock.html)
                - [x] [Deadlock](https://www.javatpoint.com/deadlock-in-java)
            - [x] Synchronization
                - [x] [Static and Instance Methods](http://geekexplains.blogspot.com/2008/07/synchronization-of-static-and-instance.html)
                - [x] [Reentrant Synchronization](https://geekexplains.blogspot.com/2008/07/what-is-reentrant-synchronization-in.html) 
                - [x] [Constructor Synchronization](http://geekexplains.blogspot.com/2008/07/synchronization-of-constructors-not.html) 
            - [x] [Oracle's Tutorial on Concurrency](https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html)
        - [x] Collection APIs
            - [x] [Collections Overview](https://docs.oracle.com/javase/7/docs/technotes/guides/collections/overview.html)
            - [x] ["True" Collections](https://www.javatpoint.com/collections-in-java)
            - [x] ["Map" Collections](https://www.javatpoint.com/java-map)
            - [x] [Oracle's Tutorial on Collections](https://docs.oracle.com/javase/tutorial/collections/index.html)   
        - [x] Java RegEx
            - [x] [Java Regular Expressions](https://www.w3schools.com/java/java_regex.asp)
            - [x] [Java RegEx Oracle Documentation](https://www.oracle.com/technical-resources/articles/java/regex.html)
            - [x] [Java RegEx Cheat Sheet by JRebel](https://www.jrebel.com/blog/java-regular-expressions-cheat-sheet)
            - [x] [Matcher Class Oracle Documentation](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html)
        - [x] Database Connectivity
            - [JDBC SQLite Drivers](https://repo1.maven.org/maven2/org/xerial/sqlite-jdbc/)
    - Personal recommendation:
        - [x] [80-hour Course from Udemy](https://www.udemy.com/course/java-the-complete-java-developer-course/)
        - [Notes and Solutions](https://github.com/kiro-boiko/java-core)
    - Useful sources:
        - [25-hour Course from CodeAcademy](https://www.codecademy.com/learn/learn-java)
        - [Java Brains](https://www.youtube.com/c/JavaBrainsChannel/playlists) 
        

- ### Servlets and JSPs

- ### Spring Framework
    - [ ] [What Is It About?](https://www.youtube.com/watch?v=gq4S-ovWVlM)

- ### Spring MVC

- ### Hibernate

- ### Spring Boot

## Server-side Programming Languages: JavaScript

- ### Express.js

## Version Control

- ### Git
    - [ ] [8 Basic Commands](https://www.kdnuggets.com/2021/10/8-git-commands-data-scientists.html) 
    - [ ] [Git Cheatsheet Article](https://towardsdatascience.com/a-git-cheatsheet-that-all-coders-need-bf8ad4d91576)

- ### GitHub
    - [ ] [GitHub MarkDown](https://guides.github.com/features/mastering-markdown/)
    - [ ] [More on GitHub Markdown](https://daringfireball.net/projects/markdown/syntax#html)

## Databases

- ### SQL (Relational) Databases
    - PostgreSQL and pgAdmin 4
        - [Documentation](https://www.postgresql.org/docs/)
- ### NoSQL Databases
- ### ORMs
    - [ ] Sequelize
    - [ ] Mongoose 
- ### ACID
- ### Transactions
- ### N+1 Problem
- ### Database Normalization
- ### Indexes

## APIs

- [ ] [What Is an API?](https://www.mulesoft.com/resources/api/what-is-an-api)

- ### Authentication
- ### REST
- ### JSON
- ### SOAP

## OS and General Knowledge

- ### Basic Networking Concepts
    - Nothing to implement.
    - [ ] [Introductory slides](https://www.ece.uvic.ca/~itraore/elec567-13/notes/dist-03-4.pdf)

- ### Terminal Usage
    - Useful sources:
        - [Install and update Git](https://phoenixnap.com/kb/how-to-update-git)  

- ### Workings of OSs

- ### Process Management

- ### Threads and Concurrency

- ### Memory Management

- ### Interprocess Communication

- ### I/O Management

- ### POSIX Basics


## Continuous Integration

- ### Test Coverage
- ### Code Analysis
- ### Unit Test
    - Unit tests are performed on individual units such as functions or classes.   

## Cloud Services 

- ### Firebase
- ### AWS
