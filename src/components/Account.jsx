const Account = ({ data }) => {
    return (
        <div className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{data.title}</h3>
                <p className="account-amount">{data.amount}</p>
                <p className="account-amount-description">{data.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button" href='#'>
                    View transactions
                </button>
            </div>
        </div>
    )
}

export default Account