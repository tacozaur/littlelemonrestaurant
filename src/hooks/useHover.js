import { useState, useEffect } from "react"

export default function useHover() {
    const [cardHover, setCardHover] = useState(false)
    const [hoverStyles, setHoverStyles] = useState([]);

    useEffect(() => {
        if (hoverStyles.length === 0) return

        const newHoverStyles = hoverStyles.map(() => ({}))
        setHoverStyles(newHoverStyles)
    }, [hoverStyles])

    const handleMouseHover = (index) => {
        setCardHover(true);
        const newHoverStyles = [...hoverStyles]
        newHoverStyles[index] = {
            position: 'relative',
            transition: 'all .2s ease-in-out',
            transform: 'translateY(-12px)',
            boxShadow: '0px 10px 20px rgba(0,0,0,0..2)',
            cursor: 'pointer',
            zIndex: 1,
            backgroundColor: 'rgba(252, 225, 204, .4)',
        }
        setHoverStyles(newHoverStyles)
    }

    const handleMouseLeave = (index) => {
        setCardHover(false)
        const newHoverStyles = [...hoverStyles]
        newHoverStyles[index] = {
            transform: 'none',
            transition: 'all .2s ease'
        }
        setHoverStyles(newHoverStyles)
    }

    return [cardHover, hoverStyles, handleMouseHover, handleMouseLeave]
}