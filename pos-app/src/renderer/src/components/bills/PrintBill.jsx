import { Modal } from 'antd'

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Bills Print"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      Bills
    </Modal>
  )
}

export default PrintBill
