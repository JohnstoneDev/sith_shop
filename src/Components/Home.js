// Home display & landing page 
import  chairs from '../Images/chairs.jpg'
import  phonehand from '../Images/phonehand.jpg'

function Home(){
    return(
        <div className="grid grid-cols-2 gap-8 pt-0 text-left text-4xl items-center justify-center min-w-screen max-h-screen">
            <div className='h-1/2'>
                <p className='mt-30'>A Taste of luxury , A central place to find just the items you're looking for. </p>
            </div>
            <div className='relative m-0 p-0 w-3/4'>
                <img src={phonehand} alt="" className='flex-auto  absolute top-0 left-0  object-cover rounded-lg' />
                <img src={chairs} alt="" className='object-cover absolute top-0 left-0 mt-32 ml-40 h-0.8 rounded-lg' />
            </div>
        </div>
    )
}


export default Home; 