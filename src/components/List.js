import React, {Component} from "react";

class ListComponent extends Component {
  	render() {
        const list = [
            {
                name:'Danica Erediano',
                avatar:'https://placekitten.com/g/64/64',
                bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...'
            
            },
            {
                name:'Mary Louise Hermosa',
                avatar:'https://image.shutterstock.com/image-vector/smiling-girl-avatar-cute-woman-260nw-1018322197.jpg',
                bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...'
            
            },
        ];

		return (
            <section className="listContainer">
                <h1>List</h1>
                {list.map(item => (
                    <div className="cardContainer" key={item.id}>
                        <div className="contentContainer">
                            <div className="cardProfileImg">
                                <img src={item.avatar} alt={item.avatar} />
                            </div>
                            <div className="cardInfo">
                                <h1 className="cardTitle">{item.name}</h1>
                                <p className="cardDesc">{item.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
		);
  	}
}

export default ListComponent;