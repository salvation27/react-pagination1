import React from 'react'
import ListItem from './ListItem'

const List = ({user,loading}) => {
    if(loading) {
        return <h2>Загрузка данных</h2>
    }
    return (
        <div className='list_wrap'>
            {
                user.map(item => <ListItem item={item} key={item.id} />)
            }
        </div>
    )
}

export default List
