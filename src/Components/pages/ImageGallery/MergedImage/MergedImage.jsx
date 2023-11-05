import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const MergedImage = ({ image, index, handleOnChange, isFeatured }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: image.id
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    minHeight: isFeatured ? '128px' : '64px',
    minWidth: isFeatured ? '128px' : '64px',
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={index}
      className={isFeatured && index===0 ? "col-span-2 row-span-2 border-2  relative z-10 group" : "md:col-span-1 lg:col-span-1 border-2 relative z-10 group"} 
      style={style}
    >
      <img src={image.fileUrl} alt={isFeatured ? "Featured" : `Image ${index + 2}`} className="w-full h-full object-cover relative" />
      <div className="absolute inset-0 transition ease duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-start">
        <input
          type="checkbox"
          id={image.id}
          name="topping"
          value="Paneer"
          className="w-4 h-4 ml-2 mt-2 cursor-pointer text-red-500 "
          checked={image.checked}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
};

export default MergedImage;
