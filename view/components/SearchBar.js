import { Box, Select, TextInput, MediaQuery } from '@mantine/core';
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';

export default function SearchBar({data, onSearch}){

    const [search, setSearch] = useState({location: null, category: null, title: ''})

    const locations = [], categories = [];

    data.map((object) => {
        if(!locations.includes(object.location)) locations.push(object.location);
        if(!categories.includes(object.category)) categories.push(object.category);
    })


    const updateSearch = (newSearch) => {
        setSearch(newSearch);
        onSearch(newSearch);
    }

    return (
        <MediaQuery query="(max-width: 500px)" styles={{ flexDirection: 'column' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                gap: 10,
            }}>
                <Select
                    placeholder='Location'
                    data={locations} 
                    value={search.location}
                    onChange={(value) => {
                        updateSearch({...search, location: value})
                    }}
                    nothingFound="No options"
                    clearable 
                />
                <Select
                    placeholder='Category'
                    data={categories} 
                    nothingFound="No options"
                    value={search.category}
                    onChange={(value) => {
                        updateSearch({...search, category: value})
                    }}
                    clearable 
                />
                <TextInput
                    icon={<FaSearch/>}
                    placeholder="Title"
                    value={search.title}
                    onChange={(event) => {
                        updateSearch({...search, title: event.currentTarget.value})
                    }}
                />
            </Box>
        </MediaQuery>
    )
}