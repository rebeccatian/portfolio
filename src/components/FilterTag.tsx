import { useState } from 'react';
import clsx from 'clsx';

import CloseIcon from '@mui/icons-material/Close';

import type { MouseEventHandler, MouseEvent } from 'react';

const FilterTag = ({
    label,
    onClick
} : {
    label: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
    const [selected, setSelected] = useState(true);
    const tagStyles = clsx(
        'flex items-center rounded py-2 px-4 ui-small h-10 w-fit border border-green-800 transition bg-duration-300',
        {
            'bg-green-900 hover:bg-emerald-900' : selected
        }
    );
    const iconStyles = clsx (
        'pl-1 bg-green-900'
    );

    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
            setSelected(!selected);
        }
    };

    return (
        <>
            {
                onClick
                    ? (
                            <button
                                aria-label={`Remove ${label} filter`}
                                className={tagStyles}
                                onClick={handleOnClick}
                            >
                                <>
                                {label}
                                {
                                    selected ? <CloseIcon
                                    className={iconStyles}
                                    fontSize='small'/>
                                    : null
                                }
                                </>
                            </button>

                    )
                    : (
                        <span className={tagStyles}>
                            {label}
                        </span>
                    )
            }
        </>
    );
};

export default FilterTag;
