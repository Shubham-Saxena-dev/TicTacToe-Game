import React from 'react'
import Square from './Square'

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myIndexArray: Array(9).fill(null),
            isX: true,
            isWinner: false,
            count: 0
        }
    }

    renderSquare = (i) => {
        return (
            <div>
                <Square indexValue={this.state.myIndexArray[i]} onclick={() => this.handleButtonClick(i)} />
            </div>)
    }

    handleButtonClick = (i) => {
        if (!this.state.myIndexArray[i] && !this.state.isWinner) {
            let myIndex = {...this.state.myIndexArray}
            myIndex[i] = this.state.isX ? "X" : "O"
            this.setState({
                isX: !this.state.isX,
                count: this.state.count + 1,
                myIndexArray: myIndex
            })
        }
        setTimeout(() => {
            this.isWinner()
        }, 10);

    }

    isWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [first, second, third] = lines[i]
            if (this.state.myIndexArray[first] && this.state.myIndexArray[second] && this.state.myIndexArray[third]) {
                if (this.state.myIndexArray[first] === this.state.myIndexArray[second] && this.state.myIndexArray[first] === this.state.myIndexArray[third]) {
                    this.setState({
                        isWinner: true
                    })
                    let message = `Winner is ${!this.state.isX ? "X" : "O"}. Press OK to play Again`
                    this.showConfirmResetBox(message)
                }
            }
            if (this.state.count === 9 && !this.state.isWinner) {
                this.showConfirmResetBox(`Its a draw. Press OK to play Again`)
                break
            }
        }

    }

    showConfirmResetBox = message => {
        if (window.confirm(message)) {
            this.setState({
                myIndexArray: Array(9).fill(null),
                isX: true,
                isWinner: false,
                count: 0
            })
        }
    }

    render() {
        return (
            <div className="moveInstructions">
                Next player: {this.state.isX ? "X" : "O"}
                <div className="board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>

        )
    }
}

export default Board