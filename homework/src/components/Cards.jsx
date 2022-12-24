import './Cards.css';

function Card(props) {
    return (
        <div className={'card-body ' + props.class} >
            <div className='card-name'>{props.name}</div>
            <div className='card-price'><span className='roubles'>руб</span><span className='price'>{props.price}</span>/мес</div>
            <div className='card-speed'>{props.speed}</div>
            <div className='card-traffic'>{props.traffic}</div>
        </ div>
    );
}
export default Card