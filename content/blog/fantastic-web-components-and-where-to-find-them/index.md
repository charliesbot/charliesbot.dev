---
slug: fantastic-web-components-and-where-to-find-them
date: 2019-03-18
title: 'Fantastic Web Components and Where to Find Them'
description: 'Morbi ut dapibus sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
published: true
banner: './banner.png'
---

So, you built an amazing component using your favorite framework/library, let's say, React. A button, a dropdown, call it what you want.

It fitted perfectly in your project, and you are proud of what you did.

Then, a workmate see that component. That solves a problem her team has! When she tried to use it, she discovers a huge blocker.

Her team is using *Vue*.

Welcome to one of the more common problems, after the component revolution.

# The framework dependence

React/Angular/Vue were pioneer of the component revolution. Their declarative API taught us how to create scalable elements. Props, lifecycles and more.

Some years later, we are using those tools for every single piece of our projects. Yes, to build everything.

Want a button? Let's use React for that.
What about a Label? Sure, let's Vue it.

And so on.

# The core problem

Let's say we're building a super button.

React:

```jsx
/* SupperButton.js */
const SuperButton = 
  ({ onClick }) => <button onClick={onClick}>Button</button>
```

Vue:

```jsx
/* SupperButton.vue */
<template>
  <button @click="onClick">
    <slot>Button</slot>
  </button>
</template>
```

Even with a syntax that looks a little bit different, in essence, we're repeating most of the code in both solutions.

The core bones of each of those components are the same. We may prefer one approach over the other to handle business logic and the way the components relate to each other, but the soul of the building blocks are the same.

# A sharing problem

Most of the teams that I worked with built a component library to reuse everywhere. Funny thing is, each team redo this library according the tech stack they are using.

They are not looking for vanilla versions of bootstrap or material-design. They are looking for react-bootstrap, or react-material.

What if we could follow real standards to build the basics, and use these smart frameworks to orchestrate the use of them?

# Web Components

Web components is a *kinda* new standard of the web. 

They let us add new HTML Elements that the browser can understand natively.

That's right! You don't need a library or a framework to create components. Just some javascript and a good name for it.

Web components are identifiable because they have a dash (-) in its name.

```html
<super-button />
```

# Thousands of possibilities. A single API.

You probably have seen implementations of several design languages, like Material Design.

Isn't weird that there are libraries that covers each framework? React, Angular, Vue, you name it. A button, a text area, or an input wrapped with some css to follow the conventions, and the framework interface to let us use it in our current projects.

Competition is great (and necessary!). But that's great if those implementations could be used no matter tech stack. We are talking about basic components, that shouldn't know the complexity of our app. Let's make that dream true.

# Come on! Let's find a wild component!

Here we go!

There are two core concepts regarding Web Components.

## Custom Element
This let us create new elements that encapsulates what we need to do to deliver a new component.

## Shadow DOM
In the dark era of the web, an `iframe` was an option to scope CSS, HTML and JS.
Now that we are talking about web components, we would love accomplish the same, without using this hacky solution.

Luckily, we have now Shadow DOM, which let us do exactly that. It allow us to create fragments attached to a scoped host.

And now...

## A wild Web Component

Let's go with the basics.

```js
class MyComponent extends HTMLElement {
constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML += `
      <style>
        #custom-button { background-color: purple; }
      </style>
      <button id="custom-button">
        hello
      </button>
      `;
  }
}

window.customElements.define("my-component", MyComponent);
``` 


