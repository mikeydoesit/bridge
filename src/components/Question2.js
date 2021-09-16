import { Link } from 'react-router-dom'

export default function Question2(props) {
    return (
        <>
            <h2>CALCULATING YOUR COSTS</h2>
            <div className="mainQuestionWrapper">
                <div className="questionWrapper">
                    <Link className="questionNav" to="/question1"><svg className="questionNavChevron" xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 11.621 20.243"><defs></defs><path class="a" d="M9,5l8,8L9,21" transform="translate(18.5 23.121) rotate(180)"/></svg></Link>

                    <div className="question"><h3>Approximately how many unique purchase orders are raised per annum for these items?</h3></div>

                    <Link className="questionNav" to="/question3"><svg className="questionNavChevron" xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 11.621 20.243"><defs></defs><path class="a" d="M9,5l8,8L9,21" transform="translate(-6.879 -2.879)"/></svg></Link>
                </div>
                <div className="inputWrapper">
                        <input type="text" value={props.answer2} onChange={props.onQuestion2Change} />
                </div>
            </div>
            
        </>
    )
}