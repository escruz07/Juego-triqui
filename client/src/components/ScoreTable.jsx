
import "../styles/ScoreTable.css"

const ScoreTable = ({scoreX, scoreO}) => (
    <div className="score-table">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreTable;