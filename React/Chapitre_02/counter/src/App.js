import React from "react";
import "./App.css";
// Components
import Counter from "./components/Counter";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>

				<Counter
					count={this.state.count}
					increment={() => {
						this.setState((prevState) => {
							return {
								count: prevState.count + 1,
							};
						});
					}}
					substract={() => {
						this.setState((prevState) => {
							return { count: prevState.count - 1 };
						});
					}}
				/>
			</div>
		);
	}
}

export default App;