import React, { Component } from 'react'
import Card from './Card'
import './Game.css'



export default class Game extends Component {
    static defaultProps = {
        gameCrads: [1, 1, 1, 1,
            2, 2, 2, 2,
            3, 3, 3, 3,
            4, 4, 4, 4,
            5, 5, 5, 5,
            6, 6, 6, 6,
            7, 7, 7, 7,
            8, 8, 8, 8,
            9, 9, 9, 9,
            10, 10, 10, 10,
            11, 11, 11, 11,
            12, 12, 12, 12,
            13, 13, 13, 13],
        packLen: 26
    }


    constructor(props) {
        super(props)

        this.state = {
            hand1: [],
            hand2: [...this.props.gameCrads],
            pcCounter: 0,
            youCounter: 0,
            gameCounter: 0,
            flag: false,
            name: '',
            wins: 0,
            lose: 0,
        }
    }






    suffleCrads = () => {
        while (this.state.hand1.length < this.state.hand2.length) {
            let randIndex = Math.floor(Math.random() * this.state.hand2.length);
            let randPack1 = this.state.hand2.splice(randIndex, 1)[0];
            this.state.hand1.push(randPack1)


        }
        for (let i = this.state.hand2.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.state.hand2[i];
            this.state.hand2[i] = this.state.hand2[j];
            this.state.hand2[j] = temp;
        }
    }
    show = () => {
        const validText = () => { this.state.name <= 0 ? alert('Error') : this.setState({ flag: true }) }
        const startGame = () => { validText(); this.suffleCrads() }
        if (this.state.flag === false) {
            return (<div className='homepage'>
                <h1>Ready for War</h1>
                <input type='text' onChange={(e) => this.setState({ name: e.target.value })} placeholder='Enter your name'></input>
                <br />
                <button onClick={startGame}>Start Game</button>
            </div>
            )
        } else {
            const newWar = () => {
                this.state.hand1.shift()
                this.state.hand2.shift()
                this.setState({ hand1: this.state.hand1, hand2: this.state.hand2 })
            }

            const counters = () => {
                if (this.state.hand1[0] >= this.state.hand2[0]) {
                    this.setState(curCount => ({
                        pcCounter: curCount.pcCounter + 1
                    }))
                } else {
                    this.setState(curCount => ({
                        youCounter: curCount.youCounter + 1
                    }))
                }
                this.setState(curValue => ({
                    gameCounter: curValue.gameCounter + 1
                }))
            }

            const isWinner = () => {
                if (this.state.pcCounter > this.state.youCounter) {
                       this.setState({ lose: this.state.lose + 1 })
                } else {
                    this.setState({ wins: this.state.wins + 1 })                
            }
            }
        
        

        const flagChange = () => {
            this.setState({ flag: false })
        }
        const countersSet = () => {
            this.setState({
                hand2: [...this.props.gameCrads],
                pcCounter: 0,
                youCounter: 0,
                gameCounter: 0,
            })
        }
        const handleClick2 = () => {
            flagChange()
            countersSet()
            this.suffleCrads()

        }

        const handleClick = () => {

            newWar();
            counters();
            isWinner();
        }
        if (this.state.gameCounter < this.props.packLen) {
            return (
                <div className='Gamepage'>
                    <div className='Computer'><h1>Computer</h1></div>
                    <Card hand1={this.state.hand1[0]} pcCounter={this.state.pcCounter} hand2={this.state.hand2[0]} youCounter={this.state.youCounter} />
                    <button onClick={handleClick} className='next'>Next</button>
                    <h1 className='You'>You</h1>

                </div>
            )
        } else {
            return (
                <div className='Gameover'>
                    <h1 className='winLose'>Lose/Wins</h1>
                    <p>{this.state.wins} / {this.state.lose}</p>
                    <button onClick={handleClick2} className='againBtn'>Again?</button>

                </div>
            )
        }
    }
}


render() {
    return (
        <div>
            {this.show()}
        </div>
    )
}


}






