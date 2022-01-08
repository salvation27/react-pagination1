import React from 'react'

const ListItem = ({item}) => {
    return (
        <div className='item'>
            {item.id} {item.title}
            <hr/>
        </div>
    )
}

export default ListItem
