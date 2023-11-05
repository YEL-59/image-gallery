
import { useState } from 'react'


const HiddenNavbar = (props) => {
    const {  handleDelete, filteredObjects } = props;
    const [isOpen, setIsOpen] = useState(false);
    console.log(filteredObjects);

  return (
  <>
   <nav className="bg-white border-b-2 sticky top-0 z-50">
      <div className="mx-auto  px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="order-first flex justify-between items-center ">
            {filteredObjects?.length > 0 ? (
              <div className="text-[#089bab] font-semibold">
                {filteredObjects.length} {filteredObjects.length > 1 ? 'files' : 'file'} selected
              </div>
            ) : (
              <>
                <i className="fa-solid fa-images fa-2xl pl-2 pr-2 mt-2 text-[#089bab]"></i>
                <h1 className="text-2xl lg:text-4xl font-bold  text-[#089bab]">Art House</h1>
              </>
            )}
          </div>
          {filteredObjects?.length > 0 ? (
          
            <div className="order-last pr-2 text-red-800 font-semibold">
            <button onClick={() => handleDelete(filteredObjects)}>
                    Delete {filteredObjects.length > 1 ? 'files' : 'file'}
                  </button>
            </div>
          
            
            
          ) : (
            ''
          )}
        </div>
      </div>
    </nav></>
  )
}

export default HiddenNavbar