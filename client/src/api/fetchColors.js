import {axiosWithAuth} from "../utils/axiosWithAuth"

export const fetchColor = () => {
    return (
        axiosWithAuth()
        .get("colors")
    )
}