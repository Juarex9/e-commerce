import ItemListContainer from '../components/ItemListContainer';
import HomeHero from '../components/HomeHero';
import { useProducts } from '../hooks/useProducts';
import Footer from '../components/Footer';
import IncentivePage from '../components/IncentivePage';

const Home = () => {
    const {products, loading, error} = useProducts();

    ///renderizado condicional:
    if (loading) return <>Loading...</>;
    if (error) return <pre>{String(error?.message ?? error)}</pre>;

    return (
        <>
        <HomeHero/>
        <ItemListContainer products={products}/>;
        <IncentivePage/>
        <Footer/>
        </>
    );
};

export default Home;