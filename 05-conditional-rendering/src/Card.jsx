import Button from '@mui/material/Button';

export const Card = ({children}) => {
    return (
    <div style={{ border: '1px solid black', padding: '10px', borderRadius: '6px' }}>
        {children}
        <Button variant="outlined">Outlined</Button>
    </div>
    )
}
