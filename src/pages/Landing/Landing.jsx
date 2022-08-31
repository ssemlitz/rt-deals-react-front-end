import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Deals!</h1>
      <h3>Retail therapy is the best form of therapy</h3>
      {/* {deals.length ? 
        <>
          {deals.map(deal =>
            <DealCard 
            key={deal._id}
            deal={deal}
            profile={user?.profile}
            user={user}
            />
          )}
        </>
      :
        <p>No deals currently</p>
      } */}
    </main>
  )
}

export default Landing
