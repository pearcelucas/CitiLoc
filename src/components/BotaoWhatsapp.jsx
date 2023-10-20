import { BotaoWhatsapp, Whatsapp } from "../pages/styles"
import whatsapp from "../images/whatsapp.png"



export const Whats = () => {
    return(
        <BotaoWhatsapp to="https://wa.link/y270z1">
                <Whatsapp src={whatsapp} />
        </BotaoWhatsapp>
    )
}