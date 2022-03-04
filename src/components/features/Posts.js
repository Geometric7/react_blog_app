import { getAllPosts } from '../../Redux/postsRedux'
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import dateToStr from '../../utils/dateToStr'
//import matchCategory from '../../utils/matchCategory'
//import { getAllCategories } from '../../Redux/categoriesRedux'
import PostCard from '../views/PostCard'

const Posts =() => {

  const posts = useSelector(state => getAllPosts(state))

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h2>All posts</h2>
        <Link className="mt-2" to={"/post/add"}>
          <Button variant="outline-info" className="mt-2">Add Post</Button>
        </Link>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {
            posts.map(post => (
              <Col key={post.id} className="d-flex align-items-stretch">
                <PostCard id={post.id}/>
              </Col>
            ))
          }
        </Row>
      </section>
    );
  }

export default Posts;
