

export const Notification = ({hayMensaje}) => {
    return (
        <>
            <h2>{hayMensaje ? 'Tienes un mensaje' : 'No tienes mensajes'}</h2>
            <small>{hayMensaje && 'Tienes un nuevo mensaje'}</small>
        </>
    )
}
