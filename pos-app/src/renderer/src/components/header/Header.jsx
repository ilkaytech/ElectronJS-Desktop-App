import { Input, Badge } from 'antd'
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined
} from '@ant-design/icons'

const Header = () => {
  return (
    <div className="border-b shadow-lg mb-6">
      <header className="py-4 px-6 flex justify-between items-center ">
        <div className="logo">
          <a href="/">
            <h2 className="text-4xl font-bold mr-3">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="rounded-full "
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-4">
          <a
            href={'/'}
            className="menu-link flex flex-col px-3 hover:text-[#48adff] transition-all "
          >
            <HomeOutlined className="text-lg " />
            <span className="text-sm">Home</span>
          </a>
          <Badge count={5} offset={[-4]} className="mr-3">
            <a href={'/'} className="menu-link flex flex-col hover:text-[#48adff] transition-all">
              <ShoppingCartOutlined className="text-lg  " />
              <span className="text-sm">Cart</span>
            </a>
          </Badge>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#48adff] transition-all">
            <CopyOutlined className="text-lg  " />
            <span className="text-sm">Invoices</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#48adff] transition-all">
            <UserOutlined className="text-lg  " />
            <span className="text-sm">Customer</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#48adff] transition-all">
            <BarChartOutlined className="text-lg  " />
            <span className="text-sm">Statistics</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#48adff] transition-all">
            <LogoutOutlined className="text-lg  " />
            <span className="text-sm">Close</span>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
