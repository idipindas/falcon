import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "falcon";
  }, []);
  return <HomePage />;
};

export default Home;
