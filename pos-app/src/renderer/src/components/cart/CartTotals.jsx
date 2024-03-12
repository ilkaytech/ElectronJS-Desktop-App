import { Button } from 'antd'
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-[#8B67F3] text-center py-2 text-white tracking-wide rounded-s-lg  shadow select-none cursor-pointer ">
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
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b className="text-sm">Ara Toplam</b>
            <span className="pr-4">99€</span>
          </div>
          <div className="flex justify-between p-2">
            <b className="text-sm">KDV %8</b>
            <span className="pr-4 text-[#8B67F3]">7.92€</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-lg">Genel Toplam</b>
            <span className="pr-4 text-lg text-[#8B67F3]">7.92€</span>
          </div>
        </div>
        <div className="">
          <Button type="" size="large" className="w-full">
            Sipariş oluştur
          </Button>
          <Button
            type=""
            size="large"
            className="w-full mt-2 flex items-center justify-center "
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
