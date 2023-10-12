import './TicTacToe.css';

function Play(){
    
}

function TicTacToe() {
    return (
        <div className="game">
            <div className="row">
                <div className="box" id='box1' onClick={Play}>box1</div>
                <div className="box" id='box2' onClick={Play}>box2</div>
                <div className="box" id='box3' onClick={Play}>box3</div>
            </div>
            <div className="row">
                <div className="box" id='box4' onClick={Play}>box4</div>
                <div className="box" id='box5' onClick={Play}>box5</div>
                <div className="box" id='box6' onClick={Play}>box6</div>
            </div>
            <div className="row">
                <div className="box" id='box7' onClick={Play}>box7</div>
                <div className="box" id='box8' onClick={Play}>box8</div>
                <div className="box" id='box9' onClick={Play}>box9</div>
            </div>
        </div>
    )
}

export default TicTacToe;