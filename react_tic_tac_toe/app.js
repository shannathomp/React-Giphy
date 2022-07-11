
//header component
const Header = () => {
return <h1>React Tic Tac Toe!!!!!</h1>
}

//player component
const Player = (props) => {
    return(
        <div className={props.playerName}>
            <h2>Player {props.playerName}</h2>
            <h3>Wins: </h3>
 </div>
    )
}

//square component
const Square = () => {
    return (
        <div>
            <h4 className='Square'>Square</h4>
        </div>
    )
}


    const Board = () => {
        return(
            <div className='board'>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
 </div>
        )
    }


//This is the app component
class App extends React.Component {
    render() {
        return(
            <section className="container">
                <Header/>
                <Player playerName = "X"/>
                <Player playerName = "O"/>
                <Board/>

        {/* <h1>React Tic Tac Toe</h1>
        <h2>React Tic Tac Toe</h2>
        <h3>React Tic Tac Toe</h3>
        <h4>React Tic Tac Toe</h4>
        <h5>React Tic Tac Toe</h5>
        <h6>React Tic Tac Toe</h6> */}
        </section>
        )

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))