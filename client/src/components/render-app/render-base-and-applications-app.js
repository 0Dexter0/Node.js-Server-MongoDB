import React, {Component} from "react";

import Toggler from "./toggler/toggler";
import SearchBar from "./search-bar/search-bar";
import ListItems from "./list-items/list-items";
import Paginator from "./paginator";
import Panel from "./panel";
import './list-items/list-item.scss';



export default class RenderBaseApp extends Component  {

    constructor() {
        super();
        this.state = {
            dataList:`users`,
            textSearch:``
        }
    }

    filterChange = (link) => {
        this.setState({
            dataList:link
        });
    };

    searchChange = (textSearch) => {
        this.setState({
            textSearch
        })
    };





    render() {
        const {dataList,textSearch} = this.state;


        return (
            <section id="main-content">
                <div id="container-for-search-and-etc">
                    <div id="empty"></div>
                    <SearchBar onSearchChange={this.searchChange}/>
                    <Panel />
                </div>
                <div id="toggler-and-pagination-container">
                    <Paginator />
                    <Toggler onFilterChange={this.filterChange} />
                </div>
                <ListItems link={dataList} searchText={textSearch}/>
            </section>
        );
    }
};
