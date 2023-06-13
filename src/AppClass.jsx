import React from "react";
import colors from "./common/colors";
// import "./main.css"

import "./common/app.scss"


class AppClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
        currentIndexColor: "",
    };
  }

    componentDidMount() {   // componentdidmount is a lifecycle method. it is called after the component is rendered for the first time.
        console.log("render");
        const randomIndex = Math.floor(Math.random() * colors.length);
    
        document.body.style.backgroundColor = colors[randomIndex];
        this.setState({ currentIndexColor : colors[randomIndex] })
    }

  render() {
  
    return (
      <div id="app">
        <h1 id="current-color">{this.state.currentIndexColor}
        </h1>

        <div className="colors">
          {
            colors.map((color, index) => 
            <button key = {`color -${index}`}
            style={{backgroundColor: color}}
            className={index === colors.indexOf(this.state.currentIndexColor) ? "active" : ""}
            onClick={() => {
              document.body.style.backgroundColor = color;
              this.setState({ currentIndexColor : color })
            }}
            >
              {/* {color} */}
              </button>
  )
          }
        </div> 
      </div>
    );
  }
}

export default AppClass;
