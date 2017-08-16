/// <reference path="../typings/react.d.ts" />
/// <reference path="../typings/react-dom.d.ts" />

class AnExampleComponent extends React.Component<any, any> {
    render() {
        return <p>Hello React World!</p>
    }
}


ReactDOM.render(<AnExampleComponent />, document.getElementById("root"));