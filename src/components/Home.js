import Homedata from "./Homedata"
import { Link } from 'react-router-dom'

export default function Home() {

    const main = Homedata.map((item, index) => {
        return (
            <div key={index} className="itemWrapper">
                            <span className="checkmark"><img src="/iconfinder_circle-check_226590.svg" /></span>
                            <span className="title">{item.title}</span>
                            <div className="estimate">
                                <span>ESTIMATE</span>
                                <div className="amount"><span>$ {item.estimate}</span></div>
                            </div>
                        </div>
                )            
            })
        
                        
    return (
        <>
        <h2>CALCULATING YOUR COSTS</h2>
            <div className="dataWrapper">
                {main}
            </div>
            <div>
                <div className="total"><span>TOTAL</span><span className="totalAmount"></span></div>
                <Link to="/question1"><div className="continueBtn"><span>Continue</span><img src="/Group 431.svg" /></div></Link>
            </div>
        </>
    )
}