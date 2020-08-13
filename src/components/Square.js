import React from 'react'
import './Square.css'

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            marked: null
        }
    }

    render() {
        return (

            <div className="square">
                <button className='myButton' onClick={() => this.props.onclick()} onMouseEnter={this.props.indexValue}> 
                    {this.props.indexValue}
                </button>
            </div>

        )
    }

}

export default Square