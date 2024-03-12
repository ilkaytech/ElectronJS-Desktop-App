import { Table, Card } from 'antd'
import Header from '../components/header/Header'

const CartPage = () => {
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
        <Table dataSource={dataSource} columns={columns} bordered />
        <div className="cart-total flex justify-end">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00€</span>
            </div>
            <div className="flex justify-between my-2 ">
              <span>KDV Toplam %8</span>
              <span className="text-red-600  ">42.92€</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>589.00€</b>
            </div>
            <button className="mt-4 ml-2 bg-[#8B67F3] text-white px-16 py-2 cursor-pointer rounded-lg shadow hover:bg-gray-300 hover:shadow-inner hover:text-gray-800 transition-all ">
              Sipariş Oluştur
            </button>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CartPage
