import { Button } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { FaTrash, FaPlus } from 'react-icons/fa'

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-[#3AA384] text-center text-sm text-white font-light py-2 rounded-tl-sm rounded-tr-sm select-none cursor-pointer ">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-2 overflow-y-auto py-2">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://www.doktorsaliheken.com/2021/03/elma.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-1">
              <b>Elma</b>
              <span>12€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1 mr-2">
            <Button
              type=""
              size="small"
              className="w-full flex items-center justify-center border-none"
              icon={<PlusCircleOutlined />}
            />
            <span className="text-md">1</span>
            <Button
              type=""
              size="small"
              className="w-full flex items-center justify-center border-none"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b font-light">
          <div className="flex justify-between px-2 my-1">
            <b className="text-sm">Sub total</b>
            <span className="">1055.01€</span>
          </div>
          <div className="flex justify-between px-2">
            <b className="text-sm">Tax</b>
            <span className=" text-[#ed6840]">210.99€</span>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between p-2">
            <b className="text-lg">Total</b>
            <span className=" text-lg text-[#3AA384] ">1266.00€</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <button className="mx-3 bg-[#ed6840] hover:bg-[#f57a55] hover:shadow-inner  text-white text-sm font-light px-20 py-2 cursor-pointer rounded-sm transition-all flex items-center">
            <FaTrash className="mr-2" />
            Delete order
          </button>
          <button className="mt-2 mx-3 bg-[#3AA384] hover:bg-[#30886e] hover:shadow-inner text-white text-sm font-light px-20 py-2 cursor-pointer rounded-sm transition-all flex items-center">
            <FaPlus className="mr-2" />
            Create order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
