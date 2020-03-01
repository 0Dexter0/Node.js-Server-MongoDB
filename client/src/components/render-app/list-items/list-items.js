import React, {Component} from 'react';
import {_transformIntoHTMLBase} from "../../../utilits/utilits-render";
import FetchClient from "../fetch-API/get-data";
import Loader from "../../../situative-components/loading-component";


export default class ListItems extends Component {

    client = new FetchClient();

    state = {
        data:null,
    }

    updateData = () => {
        const { link } = this.props
        this.client.getData(`${link}`)
            .then(dataExported => {
            this.setState({data:dataExported});
        });
    }

    searchData = () => {
        const {searchText} = this.props
        this.client.searchData(searchText)
            .then((dataSearched) => {
            this.setState({data:dataSearched});
        });
    }



    componentDidMount() {
        const { link } = this.props
        this.client.getData(link).then(dataExported => {
                 this.setState({
                     data:dataExported,
                 });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.link != prevProps.link) {
            this.updateData();
        }
        if (this.props.searchText != prevProps.searchText) {
            this.searchData();
        }
    }



    render() {
        const { data } = this.state

        if (!data) {
            return <Loader />
        }


       return (
           <div id="flex-container-for-data">
               {data.map(_transformIntoHTMLBase)}
           </div>
       );
    }
}