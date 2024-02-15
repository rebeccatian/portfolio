import CloseIcon from '@mui/icons-material/Close';
import { MouseEventHandler, ReactNode } from 'react';

interface PopupProps {
    content: ReactNode
    coordinates: {top: number, left: number}
    onClose: MouseEventHandler<HTMLButtonElement>
    value: string
}

export default function Popup(
    {
        content,
        coordinates,
        onClose,
        value
    } : PopupProps) {

    return (
        <div 
            className="absolute bg-white w-4/5 text-sm sm:text-lg sm:w-1/2 lg:w-1/3 h-fit flex flex-col border border-green-900"
            style={{top: `${coordinates.top}px`, left: `${coordinates.left}px`}}
        >
            <div>
                <button value={value} className="ml-2 mt-1 flex justify-between" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="bg-black w-[95%] sm:h-fit ml-auto mr-auto p-3 border-b-8 border-white">
                {content}
            </div>
        </div>
    );
}