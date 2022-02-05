import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import SinglePost from './components/pages/SinglePost';
import PostEdit from './components/pages/PostEdit';
import PostAdd from './components/pages/PostAdd';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <Container>
    <Header/>
    {/*strona logowania (warunek lub osobne routesy)*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
    </Routes>
    <Footer />
  </Container>
  );
}

export default App;
