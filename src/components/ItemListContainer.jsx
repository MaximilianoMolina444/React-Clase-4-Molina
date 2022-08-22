import React from 'react'

export default function ItemListContainer({item}) {
    const styles = {
        color: "blue"
    };
    return (
        <div style={styles}>
            <h1>{item.saludo}</h1>
        </div>
    )
}
