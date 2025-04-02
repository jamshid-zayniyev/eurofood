import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css';

// language 
import LanguageControler from './utils/LanguageControler';


// components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';

// redux 
import { useSelector } from 'react-redux';

//loader
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from './components/scrolltotop';
import ScrollToTopButton from './components/ScrollToTopButton';
import ReactHelmet from './components/helmet';
import { helmetData } from './data/seoData';

const Main = lazy(() => import("./pages/main"));
const About = lazy(() => import("./pages/about"));
const Products = lazy(() => import("./pages/products"));
const ProductDetail = lazy(() => import("./pages/detail-product"));
const News = lazy(() => import("./pages/news"));
const NewsDetail = lazy(() => import("./pages/detail-news"));
const ToConsumer = lazy(() => import("./pages/to-consumers"));
const TrustUs = lazy(() => import("./pages/trust-us"));
const Vacancy = lazy(() => import("./pages/vacancy"));
const VacancyDetail = lazy(() => import("./pages/detail-vacancy"));
const ContactUs = lazy(() => import("./pages/contact-us"));


// routes
const CLIENT_ROUTES = [
  {
    path: "",
    element: Main,
    protected: false,
  },
  {
    path: "about",
    element: About,
    protected: false,
  },
  {
    path: "products",
    element: Products,
    protected: false,
  },
  {
    path: ":slug/:slug2",
    element: ProductDetail,
    protected: false,
  },
  {
    path: "news",
    element: News,
    protected: false,
  },
  {
    path: "news-detail/:slug",
    element: NewsDetail,
    protected: false,
  },
  {
    path: "to-consumers",
    element: ToConsumer,
    protected: false,
  },
  {
    path: "trust-us",
    element: TrustUs,
    protected: false,
  },
  {
    path: "vacancy",
    element: Vacancy,
    protected: false,
  },
  {
    path: "vacancy-detail/:slug",
    element: VacancyDetail,
    protected: false,
  },
  {
    path: "contact",
    element: ContactUs,
    protected: false,
  },
];


function App() {

  const { language } = useSelector((state) => state.language);
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const seoData = helmetData.find(c=>c.slug === location.pathname.split('/')[location.pathname.split('/').length - 1]) 
  useEffect(() => {
    const handleStartLoading = () => {
      setProgress(30)  // Start loading
      setTimeout(() => {
        setProgress(100)  // Complete loading after delay
      }, 500)
    }

    handleStartLoading()

    // Clean up timeout if component unmounts or location changes
    return () => {
      clearTimeout()
    }
  }, [language])
  

  return (
    <div className="App">
      <ReactHelmet title={seoData?.title} description={seoData?.description}/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Suspense fallback={<Loader/>}>
        <Navbar/>
        <ScrollToTop />
        <Routes>
            {CLIENT_ROUTES.map((route, index) => (
              <Route
                key={index}
                path={`${route.path}`}
                element={<Navigate to={`/${language}/${route.path}`} replace />}
              />
            ))}
            {CLIENT_ROUTES.map((route, index) => (
              <Route
                key={index}
                path={`/:lang/${route.path}`}
                element={
                  <LanguageControler route={route}>
                    <route.element />
                  </LanguageControler>
                }
              />
            ))}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        <Footer/>
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}

export default App;
