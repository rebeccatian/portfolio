import { MouseEvent, useState } from 'react'
import FilterTag from './FilterTag'
import Card from './Card'
import { cards } from '../data'

const Portfolio = () => {
    const tags = ["frontend", "mobile", "backend", "design"];
    const [selectedItems, setSelectedItems] = useState(["frontend", "mobile", "backend", "design"]);
    const [opened, setOpened] = useState(0);
    const handleOnClick = (event: MouseEvent<HTMLButtonElement>, value: string) => {
        if (selectedItems.includes(value)) {
            setSelectedItems(selectedItems.filter(item => item !== value));
        } 
        else {
            setSelectedItems([...selectedItems, value])
        }
        
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
                                    <Card
                                        key={item.title}
                                        front={
                                            <div className='flex'>
                                                <div>
                                                    <p className='text-2xl'>{item.title}</p>
                                                    <p className='text-green-800'>{item.category[1] ? `${item.category[0]} + ${item.category[1]}` : item.category[0]}</p>
                                                    <p className='text-green-500 text-sm text-md'>{item.subtitle}</p>
                                                </div>
                                            </div>
                                        }
                                        back={
                                            <div>
                                                <a className="text-green-300 underline" href={item.link}>Link to Project</a>
                                                <img src={item.image2}/>
                                                <p>{item.description}</p>
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