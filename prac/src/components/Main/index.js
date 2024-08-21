import './item.css';

const Main = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item, index) => (
                <div className="item-card" key={index}>
                    <img src={item.src} alt={item.name} className="item-image" />
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">{item.price}원</p>
                    <div className="item-hash">
                        {/* key 값은 Virtual DOM */}
                        {item.hash && item.hash.map((h, i) => <span className="item-tag" key={i}>#{h.tag} </span>)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
