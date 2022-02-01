import React from "react";

class Butoon extends React.Component {
    render () {
        return (){}
             <button 
                   style={{
                       backgroundColor: this.props.isSelected 
                    ? "blue" 
                    : "transparent",
                }
            }
}