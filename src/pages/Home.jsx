import FeatureItem from "../components/FeatureItems"
import data from '../assets/json/featureItems.json'

const Home = () => {

    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map(item => <FeatureItem key={item.id} data={item} />)}
            </section>
        </main>
    )
}

export default Home