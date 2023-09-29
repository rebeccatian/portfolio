import clsx from 'clsx';
import { ReactNode, MouseEvent, useState, MouseEventHandler, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';

interface CardProps {
    front: ReactNode
    back: ReactNode
    className?: string
    onCloseWindow?: MouseEventHandler<HTMLButtonElement>
    windows: number
}

const Card = ({
    front,
    back,
    onCloseWindow,
    windows
} : CardProps) => {
    const [flipped, setFlipped] = useState(false);
    const [opened, setOpened] = useState(0);

    useEffect(() => {
        setOpened(windows);
    }, [windows])

    const popupClasses = clsx(
        `absolute top-32 bottom-60 left-10 bg-white w-[80%] md:w-1/2 lg:w-1/3 h-[70%] flex flex-col`,
        {
            hidden : !flipped
        }
    )

    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        setFlipped(false);
        if (onCloseWindow) {
            onCloseWindow(event);
        }
    }

    return (
        <>
            <button className='w-full text-left p-5 hover:border hover:border-green-900' onClick={() => setFlipped(true)}>
                {front}
            </button>
            <div className={popupClasses}>
                <div>
                    <button className="ml-2 mt-1 flex justify-between" onClick={handleOnClick}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="bg-black w-[95%] h-[90%] ml-auto mr-auto p-3">
                    {back}
                </div>
            </div>
        </>
    );
};

export default Card;
