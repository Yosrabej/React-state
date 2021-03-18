import "./App.css";
import React from "react";
import Pic from "./unnamed.jpg";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Person: {
                name: "yosra",
                bio: "this is my bio",
                profession: "this is my profession",
                imgSrc: Pic,
            },
            time: 0,
            show: false,
        };
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
    };

    hidePerson = () => {
        this.setState((state) => ({ show: !this.state.show }));
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.hidePerson}
                    style={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        backgroundColor: "#89cff0",
                    }}
                >
                    {this.state.show ? "Hide details" : "Show details"}
                </button>

                {this.state.show ? (
                    <div
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        <img
                            src={this.state.Person.imgSrc}
                            alt="profile pic"
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "100px",
                            }}
                        />
                        Time:{this.state.time}
                        <h1>Hello I am {this.state.Person.name}</h1>
                        <p>
                            {this.state.Person.bio} <br />
                            and {this.state.Person.profession}
                        </p>
                    </div>
                ) : null}
            </div>
        );
    }
}
export default App;
