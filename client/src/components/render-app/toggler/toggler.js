import React,{Component} from "react";
import './toggler.scss';
import getData from "../fetch-API/get-data";

export default class Toggler extends Component {

    state = {
        label:`Клиенты`,
        isOpened:false
    };


    hideBlock = (label,link) => {
        this.setState(() => {
            return {
                isOpened:false,
                label:label,
            }
        });
        this.props.onFilterChange(link);
    };



    showBlock = () => {
        this.setState({isOpened:true});
    }




    togglers = [
        {label:`Клиенты`,link:`users`},
        {label:`Заявки`,link:`requests`}
    ]



    render() {

        const {isOpened} = this.state;

        const buttons = this.togglers.map((toggler) => {
            const { label,link } = toggler
            return (
                <a className="links"
                        onClick={() => this.hideBlock(label,link)}
                        key={label}>
                    {label}</a>
            );
        });


        const clazz = isOpened ? {
            display: isOpened ? 'block' : 'none',
            borderBottom:"1px solid white"
        } : null


        return (
                <div id="dropdown-menu">
                    <i className="fas fa-bars" onClick={() => this.showBlock()}></i>
                    <div id="notvisible-dropdown" style={clazz}>
                        {buttons}
                    </div>
                </div>
        );
    };
}














































// showOrHideBlock = (labelToggler,event) => {
//     if (!event.target.matches('#visible-transition')) {
//         this.setState({isOpened: false})
//         if (event.target.matches('.links')) {
//             this.setState({label: labelToggler})
//         }
//     } else {
//         this.setState({
//             isOpened: true
//         })
//     }
// }
