import React, {Component} from "react";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
const SortableItem = SortableElement(({value}) =>
    <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

class SortableComponent extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
    }
}
class Contest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "l"
        };
    }

    render() {
        return (
            <div>
               <SortableComponent />
                <div className="header">Contest <h3>ID: {this.props.match.params.id}</h3></div>
                <div className="contest">

                    <div className="switcher">
                        <button className={this.state.page === "l" ? "active" : ""}
                            onClick={() => this.setState({page: "l"})}>Leaderboard
                        </button>
                        <button className={this.state.page === "b" ? "active" : ""}
                            onClick={() => this.setState({page: "b"})}>Brief
                        </button>
                    </div>
                    <div className="contestContent">
                        {this.state.page === "l" && <div className="leaderBoard">
                            {[1,2,3,4,5,6].map(i=> <div className="member">
                                <div className="photo"><div className="number">5</div><img src={require("../assets/images/members/"+i+".png")}  /></div>
                            </div>)}

                        </div>}
                        {this.state.page === "b" &&
                        <div className="brief">Some text about the brand. This could be images of our coffee being made
                            in a cup, mug or jar. We'd love your posts to be coffee-inspired, showcasing our brand
                            alongside your daily routine. In your caption, talk about our product and tell the best
                            coffee offer to your followers!</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contest;
