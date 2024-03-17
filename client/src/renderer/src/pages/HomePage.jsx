import CartTotals from '../components/cart/CartTotals'
import Categories from '../components/categories/Categories'
import Header from '../components/header/Header'
import Products from '../components/products/Products'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home px-2 flex justify-between gap-4 bg-[#F5F9FC] ">
        <div className="categories overflow-auto max-h-[calc(100vh-_-112px)] pb-56      ">
          <Categories />
        </div>
        <div className="products flex-[8] ">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[240px] -mr-0 shadow-xl         ">
          <CartTotals />
        </div>
      </div>
    </>
  )
}

export default HomePage
