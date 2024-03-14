import { Table, Card } from 'antd'
import Header from '../components/header/Header'
import { PiPrinterThin } from 'react-icons/pi'
import { useState } from 'react'
import PrintBill from '../components/bills/PrintBill'

const BillPage = () => {
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
        <h1 className="text-3xl  font-bold text-center text-[#3AA384] mb-4 ">Bills</h1>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
        <div className="cart-total flex justify-end">
          <Card className="w-72 mt-4">
            <button
              className="ml-1 mt-4 bg-[#3AA384] text-white text-sm font-light px-16 py-2 cursor-pointer rounded-sm hover:bg-[#30886e] hover:shadow-inner transition-all flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <PiPrinterThin className="mr-1 text-lg" />
              Print
            </button>
          </Card>
        </div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default BillPage
