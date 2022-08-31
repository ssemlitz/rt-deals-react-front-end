import styles from './DealList.module.css'

function DealList(props) {
  return (
    <>
      <h1>Deal List</h1>
      <div className={styles.container}>
        {props.deals.map(deal => 
          <div key={deal._id}>
            <p>Deal Title: {deal.title}</p>
            <p>Original Price: {deal.origPrice}</p>
            <p>Sale Price: {deal.salePrice}</p>
            <p>Deal URL: {deal.dealLink}</p>
            <p>Details: {deal.details}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default DealList