import Categories from './components/categories/Categories'
import Header from './components/header/Header'

const App = () => {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-6">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-56    ">
          <Categories />
        </div>
        <div className="products flex-[8] ">
          <div className="">products</div>
        </div>
        <div className="">
          <div>cart totals</div>
        </div>
      </div>
    </>
  )
}

export default App
