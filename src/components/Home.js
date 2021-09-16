import Homedata from "./Homedata"
import { Link } from 'react-router-dom'

export default function Home() {

    const main = Homedata.map((item, index) => {
        return (
            <div key={index} className="itemWrapper">
                            <span className="checkmark"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs></defs><path className="a" d="M20,4A16,16,0,1,0,36,20,16,16,0,0,0,20,4Zm0,29.091A13.091,13.091,0,1,1,33.091,20,13.091,13.091,0,0,1,20,33.091Z" transform="translate(-4 -4)"/><path class="a" d="M43.739,36.425a1.455,1.455,0,0,0-2.057,0L36.54,41.568l-2.057-2.057a1.455,1.455,0,0,0-2.057,2.057l3.085,3.085a1.455,1.455,0,0,0,2.057,0l6.171-6.171A1.454,1.454,0,0,0,43.739,36.425Z" transform="translate(-21.818 -24.363)"/></svg></span>
                            <span className="title">{item.title}</span>
                            <div className="estimate">
                                <span>ESTIMATE</span>
                                <div className="amount"><div>£ {item.estimate.toFixed(2)}</div></div>
                            </div>
                        </div>
                )            
            })

    return (
        <>
        <h2>CALCULATING YOUR COSTS</h2>
            <div className="dataWrapper">
                {main}
                <div></div>
                <div className="totalWrapper"><span className="total">TOTAL</span><span className="totalAmount">£0.00</span></div>
                <Link className="btnWrapper" to="/question1"><div className="continueBtn"><span>Continue</span><img src="/Group 431.svg" /></div></Link>
            </div>
        </>
    )
}