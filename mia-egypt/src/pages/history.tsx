import { useNavigate } from 'react-router-dom';
import './history.css' 

function History() {
    const navigate = useNavigate();
    return(
        <>
        <title>MIA Egypt</title>
        <div className="nav-bar">
        <button
            className="home-button"
            onClick={() => {
            navigate('/');
            } }></button>
        <button
            onClick={() => {
            navigate('/Collections');
            } }>Collections</button>
        <button
            className="map-button"
            onClick={() => {
            navigate('/Map');
            }}
            >Map</button>
        <button
            onClick={() => {
            navigate('/History');
            } }>History</button>
        <button
            onClick={() => {
            navigate('/Exhibitions');
            } }>Exhibitions</button>
        <button>عربي</button>
        </div>
        </>
  );
}

export default History;
