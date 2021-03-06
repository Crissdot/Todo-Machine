import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <section className="TodoSearch">
            <input 
                placeholder="Busca un todo" 
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading}
            />
        </section>
    );
}

export { TodoSearch };
