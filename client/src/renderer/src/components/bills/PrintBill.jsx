import { Modal } from 'antd'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { PiPrinterThin } from 'react-icons/pi'

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  return (
    <Modal
      title="Print Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-10 bg-black" ref={componentRef}>
        <div className="max-w-3xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Bill To:</p>
                  <p className="text-green-600"></p>
                  <p> Fake Street 123</p>
                  <p> San Javier </p>
                  <p> CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice From:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Invoice Number:</p>
                    <p></p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Issue Date:</p>
                    <p></p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Terms:</p>
                    <p>10 days</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Due Date:</p>
                    <p>2023-11-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Title
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img src="" alt="" className="w-12 h-12 object-cover" />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium"></span>
                        <span className="sm:hidden inline-block text-xs">Unit Price € </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium"></span>
                        <span className="sm:hidden inline-block text-xs">Unit Price €</span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>€</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span></span>
                    </td>
                    <td className="py-4 text-end">
                      <span>€</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Sub total</span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" scope="row" colSpan="4">
                      <p className="font-normal text-slate-700">Tax</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">€</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" scope="row" colSpan="4">
                      <p className="font-normal text-slate-700">KDV</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">€</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" scope="row" colSpan="4">
                      <p className="font-normal text-slate-700">Total</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">€</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Payment terms are 14 days. Please note that under the Late Payment of Unsorted
                    Debts Regulations, self-employed individuals are entitled to charge a late fee
                    of 00.00 after this period if debts remain unpaid, and at this point a new
                    invoice will be issued in addition to this fee. Failure to pay the revised
                    invoice within 14 days will result in additional interest added to the overdue
                    account at a total rate of 8.5%, being 8% above the Bank of England base rate
                    plus 0.5%. The parties cannot contract outside of the Law provisions.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <button
          className="ml-1 mt-4 bg-[#3AA384] text-white text-sm font-light px-16 py-2 cursor-pointer rounded-sm hover:bg-[#30886e] hover:shadow-inner transition-all flex items-center"
          onClick={handlePrint}
        >
          <PiPrinterThin className="mr-1 text-lg" />
          Print
        </button>
      </div>
    </Modal>
  )
}

export default PrintBill
