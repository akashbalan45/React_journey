/*

<div id="parent">

<div id="child1">
   <h1>Its an h1  tag</h1>
   <h2>Its an h2 tag</h2>
</div>

<div id="child2">
   <h1>Its an h1  tag</h1>
   <h2>Its an h2 tag</h2>
</div>

</div>

*/



const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"Its an H1 tag"),
            React.createElement("h2",{},"Its and H2  tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"Its an H1 tag"),
            React.createElement("h2",{},"Its and H2  tag")
        ])
    ]
   
);
 // ⬆️ It looks more untidy so we use jsx 

console.log(parent); // this parent in just a object

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this render method convert the object into html to our browser





/*
    // creating a root element
    const heading = React.createElement("h1",{id : "heading"},"hello world from js");

    console.log(heading);
    // got a refernce to the root dom element
    const root =  ReactDOM.createRoot(document.getElementById("root"));
    // rendering the react element in browser
    root.render(heading);
*/