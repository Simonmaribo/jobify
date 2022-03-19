import { Box } from "@mantine/core";

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
            transition: 'all 200ms ease-in-out',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            }
         }}>
        </Box>
    )  
}