import "./Alerta.css"
import Swal from "sweetalert2"

export const Alerta = ({
    title = null,
    text = null,
    icon = null,
    showCancelButton = null,
    confirmButtonColor = "#3085d6",
    cancelButtonColor = "#d33",
    confirmButtonText = null,
    cancelButtonText = null

}) => {
    return (
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        })
    )
}

export default Alerta