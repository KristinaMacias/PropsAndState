import React from "react";

export default class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>I am a child component calling on props</h2>
                <h2>Count: {this.props.counter}</h2>
            </div>
        )
    }

}
