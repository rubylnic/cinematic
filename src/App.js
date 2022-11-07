
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import FilmPage from "./pages/FilmPage";
import Films from "./pages/Films";
import Genres from "./pages/Genres";
import HomePage from "./pages/HomePage";
import Favourites from './pages/Favourites';



function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className='px-5'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/navigation" element={<Navigation />} />
                        <Route path="/films">
                            <Route path=":type" element={<Films />}>
                                <Route path=":page" element={<Films />}></Route>
                            </Route>
                            <Route path="id:id" element={<FilmPage />}></Route>
                        </Route>
                        <Route path="genres" element={<Genres />}></Route>
                        <Route path="favs" element={<Favourites />}></Route>

                    </Routes>
                </div>
            </Router>

        </div>
    );
}

export default App;
