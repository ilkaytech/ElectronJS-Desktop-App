import { Form, Input, Modal, Select, Card } from 'antd'
import { FaPlus } from 'react-icons/fa'

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log('Received values of form', values)
  }

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={'vertical'} onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          rules={[{ required: true, message: 'Username is required' }]}
          name={'customerName'}
        >
          <Input placeholder="Bir Müşteri adı yazınız" />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name={'customerPhoneNumber'} label="Phone Number">
          <Input placeholder="Bir Tel No yazınız" maxLength={11} />
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi" rules={[{ required: true }]} name={'paymentMode'}>
          <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card className=" mt-2">
          <div className="flex justify-between">
            <span>Sub total</span>
            <span>1055.01€</span>
          </div>
          <div className="flex justify-between my-2 ">
            <span>Tax</span>
            <span className="text-[#ed6840] ">210.99€</span>
          </div>
          <div className="flex justify-between">
            <b>Total</b>
            <b>1266.00€</b>
          </div>
          <div className="flex justify-end ">
            <button
              className="mt-4 bg-[#3AA384] text-white text-sm font-light px-6 py-2 cursor-pointer rounded-sm hover:bg-[#30886e] hover:shadow-inner transition-all flex items-center "
              onClick={() => setIsModalOpen(true)}
              type="submit"
            >
              <FaPlus className="mr-2" />
              Create order
            </button>
          </div>
        </Card>
      </Form>
    </Modal>
  )
}

export default CreateBill
