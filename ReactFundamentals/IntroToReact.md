#Introduction to React
https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/

##React.js Fundamentals:
* __Components__ are the building blocks of React (think widgets/modules), a collection of HTML, CSS< JS and some internal data specific to that component
    * Components are defined either in pure JS or can be defined in what React calls 'JSX'
* __JSX__: allows us to write HTML like syntax which gets transformed to lightweight JS objects
* __Virtual DOM__: a JS representation of the actual DOM
* __`React.createClass()`__ the way in which you create a new component
* __render (method)__ - what we would like our HTML template to look like
* __ReactDOM.render__ - renders a React compinent to a DOM node
* __state__ - teh internal data store (object) of a component
* `getInitialState` - the way in which you set the initial state of the component
* __setState__ - a helper method for altering the state of a component
* __props__ - the data which is passed to the child component from the parent component
* __propTypes__ - allows you to control the presence, or types of certain props passed to the child component.
* __getDefaultProps__ - allows you to set default props for your component
* __Component LifeCycle__
    - __componentWillMount__ - fired before the component will mount
    - __componentDidMount__ - fired after the component mounted
    - __componentWillReceiveProps__ - fired whenever there is a change to props
    - __componentWIllUnmount__ - fired before the component will unmount
* __Events__
    - __onClick__
    - __onSubmit__
    - __onChange__

##Creating your First Component (JSX, Virtual DOM, render, ReactDOM.render)
* Every component is required to have a __render__ method. Render is the template for our component
*
```
// JSX code
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

// JSX -> JS
var HelloWorld = React.createClass({
  displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});
```

##JSX Reminders
* There must be exactly __one__ outter-most tag inside `return (...)`
* Attach the UI to the DOM;
  - `ReactDOM.render` takes two args:
    + UI Object, which is `<JSXComponent />`
    + DOM object, which is `document.getElementById("container)`
```
var JSXComponent = React.createClass){ ... });

ReactDOM.render(
  <JSXComponent />,
  document.getElementById("container")
);
```
* in jQuery, when some events happen, you usually change the DOM, but in React _you don't directly modify the DOM_. Instead you're modifying something called the __state__, and this is doe by calling `this.setState`
  * everytime state is updated, `render()` is called again. And inside `render()` you can access the state
  * 