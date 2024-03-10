const Categories = () => {
  return (
    <ul className="flex flex-col gap-4 text-sm ">
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>All</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Technology</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Dresses</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center">
        <span>Shoes</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Fruit</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Grocery</span>
      </li>
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Vegetable</span>
      </li>{' '}
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Sports</span>
      </li>{' '}
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Cosmetic</span>
      </li>{' '}
      <li className="bg-gray-200 px-7 py-7 cursor-pointer rounded-lg shadow  hover:bg-gray-300 hover:shadow-inner transition-all flex items-center justify-center ">
        <span>Bag</span>
      </li>
    </ul>
  )
}

export default Categories
