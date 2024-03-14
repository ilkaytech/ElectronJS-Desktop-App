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
    <div className="border-b  mb-4 bg-[#F8F8F8]  ">
      <header className="py-4 px-6 flex justify-between items-center ">
        <div className="logo">
          <a href="/">
            <h2 className="text-4xl mr-3 font-light text-[#3AA384] ">Logo</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="rounded-full text-gray-600 hover:border-[#3AA384]"
          />
        </div>
        <div className=" menu-links flex justify-between items-center gap-4 text-gray-800 font-light    ">
          <a
            href={'/'}
            className=" menu-link flex flex-col px-3  hover:text-[#3AA384] transition-all "
          >
            <HomeOutlined className="text-lg" />
            <span className="text-sm ">Home</span>
          </a>
          <Badge count={5} offset={[-4]} className="mr-3" style={{ backgroundColor: '#ed6840' }}>
            <a
              href={'/cart'}
              className="menu-link flex flex-col text-gray-800 hover:text-[#3AA384] transition-all"
            >
              <ShoppingCartOutlined className="text-lg " />
              <span className="text-sm">Sales</span>
            </a>
          </Badge>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#3AA384] transition-all">
            <CopyOutlined className="text-lg  " />
            <span className="text-sm">Biils</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#3AA384] transition-all">
            <UserOutlined className="text-lg  " />
            <span className="text-sm">Customers</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#3AA384]  transition-all">
            <BarChartOutlined className="text-lg  " />
            <span className="text-sm">Statistics</span>
          </a>
          <a href={'/'} className="menu-link flex flex-col hover:text-[#3AA384] transition-all">
            <LogoutOutlined className="text-lg  " />
            <span className="text-sm">Logout</span>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
