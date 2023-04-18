import { useState } from "react"
import './about.css';

const Progress = ({ done }) => {

    const [style, setStyle] = useState({})
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle)
    }, 2000);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>
    )
}
export default Progress;