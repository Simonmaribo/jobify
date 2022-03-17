import { Box, Text } from "@mantine/core";

import { IoLocationSharp } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'

export default function JobCard({title, description, location}){
    return (
        <Box component="a" href="" sx={{
            display: 'flex',
            gap: 55,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid rgb(233, 236, 239)',
            backgroundColor: '#fff',
            borderRadius: 5,
            padding: '1.5rem',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            }
        }}>
            <Box>
                <Text sx={{ color: '#0D101D', fontSize: 20, fontWeight: 600 }}>{title}</Text>
                <Text sx={{ color: '#0D101D', opacity: 0.8 }}>{description}</Text>
                <Box sx={{ display: 'flex', marginTop: 20, gap: 3 }}>
                    <IoLocationSharp/>
                    <Text sx={{ lineHeight: 1, fontWeight: 500, opacity: 0.9 }}> {location}</Text>
                </Box>
            </Box>
            <Box sx={{ color: '#0050ff' }}>
                <FaChevronRight style={{ width: 35, height: 35}}/>
            </Box>
        </Box>
    )
}