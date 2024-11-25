
// ! React is a Library

const heading1 = React.createElement("h1",{id:'head1',key:"haeding1"},"heading1")

const heading2 = React.createElement("h1",{id:'head2',key:'heading2',hello:"world"},"heading2") //!{are called props}

const container = React.createElement("div",{id:'contains'},[heading1,heading2])

const root  = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)

// !npm install -D parcel (-D to install as a dev dependencies and not for peoduction)

// ! package-lock.json {}