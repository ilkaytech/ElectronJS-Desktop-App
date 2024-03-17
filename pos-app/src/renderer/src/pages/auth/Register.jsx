import { Button, Carousel, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className=" px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-4xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name={'username'}
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name={'email'}
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name={'password'}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name={'passwordAgain'}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full" size="large">
                Sign up
              </Button>
            </Form.Item>
          </Form>
          <div className="text-sm font-light flex justify-center absolute left-0 bottom-10 w-full ">
            Already have an account?&nbsp;
            <Link to={'/login'} className="text-[#3AA384] hover:text-[#30886e]">
              Sign In
            </Link>
          </div>
        </div>
        <div className="w-3/5 min-w-550px] bg-[#3AA384] ">
          <div className="w-full">
            <Carousel className="!h-full px-6" autoplay>
              <AuthCarousel
                img="../../assets/responsive.svg"
                title="Responsive"
                desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
              />
              <AuthCarousel
                img="/assets/statistic.svg"
                title="İstatistikler"
                desc="Geniş Tutulan İstatistikler"
              />
              <AuthCarousel
                img="/assets/customer.svg"
                title="Müşteri Memnuniyeti"
                desc="Deneyim Sonunda Üründen Memnun Müşteriler"
              />
              <AuthCarousel
                img="/assets/admin.svg"
                title="Yönetici Paneli"
                desc="Tek Yerden Yönetim"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
