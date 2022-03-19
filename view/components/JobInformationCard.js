import { Box, Text } from "@mantine/core";

export default function JobInformationCard({data}){
    return (
        <Box sx={{ 
            display: 'flex',
            gap: 55,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid rgb(233, 236, 239)',
            backgroundColor: '#fff',
            borderRadius: 5,
            padding: '1.5rem',
        }}>
            <Text>{data.title}</Text>
        </Box>
    )  
}