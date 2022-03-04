import { useSelector } from 'react-redux'
import { getAllCategories } from '../../Redux/categoriesRedux'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'

const Categories = () => {

  const categories = useSelector(state => getAllCategories(state))

  return (
    <>
      <h1>All Categories</h1>
      <ul className={styles.list}>
        {
          categories.map(category => (
            <li key={category.id}><Link className="mt-auto" to={`/categories/${category.name}`}>{category.name}</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Categories;
