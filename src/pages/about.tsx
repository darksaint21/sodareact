import Background from '../assets/images/alexandra-nosova-lpv--JSLa58-unsplash.jpg'

function about() {
    return (

      <div 
    style={{backgroundImage:`url(${Background})`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
       <div className="flex place-items-center h-screen">
       <h3 className='p-4 flex flex-col bg-slate-300 bg-opacity-50 text text-orange-400 rounded mb-80'>
        Welcome to the Soda Shop for you soda needs
         that you have like or want to try!</h3>
       
        </div>
      
    </div>
      
    )
  }
  
  export default about
