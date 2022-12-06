import SpinnerGif from './assets/spinner.gif'



function Spinner() {
    return (
        <div className='w-100 pt-50 mt-250 '>
            <img className='text-center mx-auto' src={SpinnerGif} alt="Loading..." width={150} />
        </div>
    )
}

export default Spinner