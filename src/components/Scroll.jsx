import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Scroll = () => {

    const { pathname } = useLocation();

    window.scrollTo(0, 0)

    useEffect(() => {

    }, [pathname])

    return (
        <div>

        </div>
    )
}

export default Scroll