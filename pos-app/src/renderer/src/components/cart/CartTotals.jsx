import { Button } from 'antd'
import { ClearOutlined } from '@ant-design/icons'

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-[#8B67F3] text-center py-2 text-white tracking-wide rounded-s-lg  shadow select-none cursor-pointer ">
        Sepetteki Ürünler
      </h2>
      <div className="cart-items">
        <div className="cart-item">cart item</div>
      </div>
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
