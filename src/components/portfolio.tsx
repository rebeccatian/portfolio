import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import FilterTag from './FilterTag'
import { cards, CardTypes } from '../data'
import Popup from './Popup'

const Portfolio = () => {
    const tags = ["frontend", "mobile", "backend"];
    const [selectedItems, setSelectedItems] = useState(["frontend", "mobile", "backend"]);
    const [openedItems, setOpenedItems] = useState<CardTypes[]>([])
    const handleOnClick = (event: MouseEvent<HTMLButtonElement>, value: string) => {
        if (selectedItems.includes(value)) {
            setSelectedItems(selectedItems.filter(item => item !== value));
        } 
        else {
            setSelectedItems([...selectedItems, value])
        }
        
    }

    const handleOnClose = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        setOpenedItems(items => (
            items.filter(opened => opened.title !== value)
        ));
    }

    const handleOnOpen = (value: CardTypes) => {
        setOpenedItems(items => (
                items.includes(value) ? items.filter(opened => opened !== value) : [...items, value]
            )
        );
    }

    return (
        <div className="flex flex-col h-[80vh] overflow-auto">
            <div className='p-4 flex flex-col text-right'>
                <h1 className='text-xl'>My Works</h1>
                <h2 className='py-4 text-sm'>Filters</h2>

                <div className="flex space-x-2 flex-wrap self-end">
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
                                    <button type="button" key={item.title} value={item.title} className='w-full text-left p-5 hover:border hover:border-green-900' 
                                        onClick={() => handleOnOpen(item)}
                                    >
                                        <p className='text-md md:text-xl'>{item.title}</p>
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
                    openedItems.map(
                        (card, index) => {
                            return (
                                <Popup
                                    key={card.title}
                                    value={card.title} 
                                    coordinates={
                                        {
                                            top: 50 + index*10,
                                            left: 50 + index*10
                                        }
                                    }
                                    onClose={handleOnClose}
                                    content={
                                        <div>
                                            <Image height={300} src={card.image2} alt="SeatGeek Project Image"/>
                                            <p className="mt-4 ">{card.description}</p>
                                            <a className="text-green-300 underline" href={card.link}>Demo Link</a>
                                            <a href={card.githubLink} className="text-green-300 underline block">Github Link</a>
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