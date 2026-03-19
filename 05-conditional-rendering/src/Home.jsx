import { Card } from "./Card"
import { Modal } from "./Modal"

export const Home = () => {
    return (
    <>
        <Card>
            <h2>Comida especializada</h2>
            <p>Descubre nuestra selección de platos gourmet preparados por chefs especializados.</p>
        </Card>
        <Modal title="Oferta Especial" content="¡Aprovecha un 20% de descuento en tu primera orden" />
        <Modal title="Nuevo Menú" content="Explora nuestro nuevo menú de temporada con ingredientes frescos y deliciosos." />
        
    </>
    )
}
