import { Link } from 'react-router-dom'
import Homedata from './Homedata'

export default function Dashboard(props) {
    
    const supplierAndProduct = ((Homedata[0].estimate) + (Homedata[1].estimate)) * props.answer2
    const quotation = ((Homedata[2].estimate) + (Homedata[3].estimate) + (Homedata[4].estimate) + (Homedata[5].estimate)) * props.answer2
    const expediting = Homedata[6].estimate * props.answer1
    const invoices = Homedata[7].estimate * props.answer2
    const payingSuppliers = Homedata[8].estimate * props.answer3
    const totalCost = supplierAndProduct + quotation + expediting + invoices + payingSuppliers



    return (
        <>
            <h2>CALCULATING YOUR COSTS - TOTAL RESULTS</h2>
            <div className="dashboardWrapper">
                <div className="leftDash">
                    <div className="boldText">By utilising the Bridge Sales Enablement Agency calculator organisations can simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.</div>
                    <p>
                    Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.
                    </p>
                    <Link className="backBtnWrapper" to="/question3"><div className="goBackBtn"><img src="/Group 431.svg" /><span>Go back</span></div></Link>
                </div>
                <div className="rightDash">
                    <div className="dashItem">
                        <div className="dashItemTitle">Supplier & product</div>
                        <div className="dashItemAmount">£ {supplierAndProduct.toFixed(2)}</div>
                    </div>
                    <div className="dashItem">
                        <div className="dashItemTitle">Quotation to order process</div>
                        <div className="dashItemAmount">£ {quotation.toFixed(2)}</div>
                    </div>
                    <div className="dashItem">
                        <div className="dashItemTitle">Expediting & receiving orders</div>
                        <div className="dashItemAmount">£ {expediting.toFixed(2)}</div>
                    </div>
                    <div className="dashItem">
                        <div className="dashItemTitle">Processing invoices</div>
                        <div className="dashItemAmount">£ {invoices.toFixed(2)}</div>
                    </div>
                    <div className="dashItem">
                        <div className="dashItemTitle">Paying suppliers</div>
                        <div className="dashItemAmount">£ {payingSuppliers.toFixed(2)}</div>
                    </div>
                    <div className="dashTotal">
                        <div className="dashTotalTitle">Total Process Costs (year)</div>
                        <div className="dashTotalAmount">£ {totalCost.toFixed(2)}</div>
                    </div>
                    <Link to="/thankyou">
                    <div className="sendReportWrapper"><div className="sendReport">Send me this report</div></div>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
