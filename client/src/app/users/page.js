import React from 'react'
import Sidebar from '../components/users/sidebar';
import Navbar from '../components/navbar/page';
import Footer from '../components/Footer/page';
const page = () => {
  return (
    <div>
<Navbar />
        <div><Sidebar /></div>
        <Footer />
    </div>
  )
}

export default page