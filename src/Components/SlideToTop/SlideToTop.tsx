import { useState } from "react"
import { FaAngleUp } from "react-icons/fa6"

const SlideToTop = () => {
const [showScroll, setShowScroll ] = useState(false);

const handleScroll = ()=>{
    if(window.scrollY > 180 ){
        setShowScroll(true);
    } else{
        setShowScroll(false);
    }
}

window.onscroll = handleScroll;
  return (
    <div className="h-0">
        {showScroll && (
        <div
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed right-4 bottom-6 sm:right-8 sm:bottom-8 bg-gray-300 rounded-full p-5 shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 z-40"
        >
          <FaAngleUp className="text-green-600 text-lg" />
        </div>
      )}
    </div>
  )
}

export default SlideToTop
