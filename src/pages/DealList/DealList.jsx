import styles from './DealList.module.css'
import DealCard from '../../components/DealCard/DealCard'

function DealList(props) {
  const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]
  
  return (
    <>
      <h1>Deal List</h1>
      <div className={styles.container}>
        {props.deals.map(deal => 
          <DealCard 
            key={deal._id} 
            deal={deal}
            randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]}
            handleDeleteDeal={props.handleDeleteDeal}
            user={props.user}
            />
        )}
      </div>
    </>
  )
}

export default DealList