import { Table, Card } from 'antd'
import Header from '../components/header/Header'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import CreateBill from '../components/cart/CreateBill'

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: '32',
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: '42',
      address: '10 Downing Street'
    }
  ]

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]
  return (
    <>
      <Header />
      <div className="px-4">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
        <div className="cart-total flex justify-end">
          <Card className="w-72 mt-4">
            <div className="flex justify-between">
              <span>Sub total</span>
              <span>549.00€</span>
            </div>
            <div className="flex justify-between my-2 ">
              <span>Tax</span>
              <span className="text-[#ed6840]">42.92€</span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>589.00€</b>
            </div>
            <button
              className="ml-1 mt-4 bg-[#3AA384] text-white text-sm font-light px-16 py-2 cursor-pointer rounded-sm hover:bg-[#30886e] hover:shadow-inner transition-all flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus className="mr-2" />
              Create order
            </button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default CartPage
