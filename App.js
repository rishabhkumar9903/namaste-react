const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child_1"},[React.createElement("h1",{},"Hello my first Name is Rishabh"),
    React.createElement("h2",{},"Hello my last Name is Kumar")]),

    React.createElement("div",{id:"child_2"},[React.createElement("h1",{},"My first School Name is Mount Carmel School"),
    React.createElement("h2",{},"My second School Name is TRM Public School")])
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/**
 * 
 * The react is a library because it is able to work in the small portion of the app also like header,footer,sidebar,main etc
 * it is a small piece of code and it can be applied to the existing app also. Whereas a framework is not a small piece of code
 * it is used to make big application.
 * 
 * When we are doing the root.render(parent) then we are putting the parent object(which contain parent element) into the root
 * element by replacing any of the element if exists inside the root.
 * 
 * <body>
 * <h1>Upper Letter</h1>
 * <div id="root">
 * <h3>My is Rishabh Kumar</h3>
 * </div>
 * <h1>Lower Letter</h1>
 * </body>
 * 
 * So in the above given code in the comment section when we do root.render(parent) then it will be automatically replacing the 
 * h3 tag inside the root tag but it will not replace the two h1 tags because react will work only inside the root tag only.
 * 
 * The code above of the react become two complex if will be using more tags in our code.So to get rid of it we will be using the jsx.
 * 
 */