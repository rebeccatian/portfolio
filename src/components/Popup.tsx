import { CardTypes } from '@/data';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, ReactNode, SetStateAction, use, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface PopupProps {
    content: ReactNode
    coordinates: {top: number, left: number}
    onClose: (value: string | undefined) => void
    value: string
    ref?: React.RefObject<HTMLButtonElement>
    setOpenedItems?: Dispatch<SetStateAction<CardTypes[]>>
    openedItems?: CardTypes[]
}

export default function Popup(
    {
        content,
        coordinates,
        onClose,
        ref,
        value,
        setOpenedItems,
        openedItems
    } : PopupProps) {

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
        if (!(event.target instanceof HTMLElement) || event.target.tagName.toLowerCase() !== 'p') {
            setOpenedItems && setOpenedItems([]);
        }
        console.log(event.target)
    }

    useOnClickOutside(buttonRef, handleClickOutside);

    return (
        <div  
            className="absolute bg-white w-4/5 text-sm md:text-lg md:w-1/2 lg:w-1/3 h-fit flex flex-col border border-green-900"
            style={{top: `${coordinates.top}px`, left: `${coordinates.left}px`}}
        >
            <button
                ref={buttonRef}
                value={value}
                className="ml-2 mt-1 flex justify-between" onClick={() => onClose(ref?.current?.value)}
            >
                <CloseIcon />
            </button>
            <div className="bg-black w-[95%] md:h-fit ml-auto mr-auto p-3 border-b-8 border-white">
                {content}
            </div>
        </div>
    );
}