export default class FetchClient {
    _mainIp = "http://192.168.0.102:5000/"

    _searchUsers = "?searchQuery=1"

    getData = (neededData) => {
        return fetch (`${this._mainIp}${neededData}`)
            .then(data => {
                return data.json();
            });
    }

    searchData = (filter) => {
        return fetch(`${this._mainIp}${this._searchUsers}${filter}`)
            .then(data => {
                return data.json()
            });
    }
}

