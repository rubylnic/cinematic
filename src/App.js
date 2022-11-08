
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
                <div className='px-5 pt-120px'>
                    <Routes>
                        <Route path="/cinematic" element={<HomePage />} />
                        <Route path="cinematic/films">
                            <Route path=":type" element={<Films />}>
                                <Route path=":page" element={<Films />}></Route>
                            </Route>
                            <Route path="id:id" element={<FilmPage />}></Route>
                        </Route>
                        <Route path="cinematic/genres" element={<Genres />}></Route>
                        <Route path="cinematic/favs" element={<Favourites />}></Route>

                    </Routes>
                </div>
            </Router>

        </div>
    );
}

export default App;
