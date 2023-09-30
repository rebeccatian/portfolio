import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import FilterTag from './FilterTag'
import { cards, CardTypes } from '../data'
import Popup from './Popup'
import { ListItem } from '@mui/material'

const Portfolio = () => {
    const tags = ["frontend", "mobile", "backend", "design"];
    const [selectedItems, setSelectedItems] = useState(["frontend", "mobile", "backend", "design"]);
    const [openedItems, setOpenedItems] = useState<string[]>([])
    const handleOnClick = (event: MouseEvent<HTMLButtonElement>, value: string) => {
        if (selectedItems.includes(value)) {
            setSelectedItems(selectedItems.filter(item => item !== value));
        } 
        else {
            setSelectedItems([...selectedItems, value])
        }
        
    }

    // const [coordinates, setCoordinates] = useState({bottom: 0, left: 0});

    const handleOnClose = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        event.preventDefault();
        console.log(value);
        setOpenedItems(item => (
            item.filter(opened => opened !== value)
        ));
    }

    const handleOnOpen = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        setOpenedItems(item => (
            item.includes(value) ? item.filter(opened => opened !== value) : [...item, value]
        ));
    }

    return (
        <div className="flex flex-col h-[70vh] overflow-auto">
            <div className='p-9'>
                <h1 className='text-xl'>My Works</h1>
                <h2 className='py-4 text-sm'>Filters</h2>

                <div className="flex space-x-2 flex-wrap">
                    {
                        tags.map(item => {
                            return (
                                <FilterTag key={item} label={item} onClick={e => handleOnClick(e, item)}/>
                            )
                            
                        })
                    }
                </div>
            </div>
            <div className='md:overflow-auto'>
                    {
                        cards.filter(item => selectedItems.includes(item.category[0] || (item.category[0] && item.category[1]))).map(
                            item => {
                                return (
                                    <button key={item.title} value={item.title} className='w-full text-left p-5 hover:border hover:border-green-900' 
                                        onClick={handleOnOpen}
                                    >
                                        <p className='text-2xl'>{item.title}</p>
                                        <p className='text-green-800'>{item.category[1] ? `${item.category[0]} + ${item.category[1]}` : item.category[0]}</p>
                                        <p className='text-green-500 text-sm text-md'>{item.subtitle}</p>
                                    </button>
                                )
                            }
                        )
                    }
            </div>
            <div>
                {
                    cards.filter(item => openedItems.includes(item.title)).map(
                        (card, index) => {
                            return (
                                <Popup
                                    key={card.title}
                                    value={card.title} 
                                    coordinates={
                                        {
                                            top: 50 + index*10,
                                            left: 100 + index*10
                                        }
                                    }
                                    onClose={handleOnClose}
                                    content={
                                        <div>
                                            <a className="text-green-300 underline" href={card.link}>Link to Project</a>
                                            <img src={card.image2}/>
                                            <p>{card.description}</p>
                                        </div>
                                    }
                                /> 
                            )
                        }
                    )
                }
            </div>
        </div>
      )
}

export default Portfolio;