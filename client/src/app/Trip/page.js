import Booking from '../components/Booking/page';
import Map from '../components/Map/page';
import Navbar from '../components/navbar/page'
import Footer from '../components/Footer/page';
const page = () => {
  return (

    <>
    <Navbar />
   
    <div className="flex flex-wrap mt-2">
    <div className="w-full sm:w-2/5 lg:w-2/5 xl:w-2/5 px-2 mb-4 ">
     
      <div className="bg-gray-50 ">
        
        <Booking />
      </div>
    </div>
    <div className="w-full sm:w-3/5 lg:w-3/5 xl:w-3/5 px-4 mb-4">
     
      <div className="bg-gray-300 ">

        <Map />
      </div>
    </div>
  </div>

<Footer />

</>
  )
}

export default page