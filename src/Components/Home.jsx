
import img from "../assets/img/home.png"
import Button from '../layouts/button'
function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
        <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
            <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight'>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet.</p>

            <div className='flex flex-row gap-6'>
                <Button title="Add to Cart" />
                <Button title="More Menu" />
            </div>
        </div>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Home