import React from 'react';
import accuWeather from '../api/accuWeather';
import Autocomplete from "./Autocomplete";

class App extends React.Component {
    state = { suggestions: [] };
    onSearchChange = async (term) => {
        const response = await accuWeather.get('/locations/v1/cities/autocomplete', {
            params: { apikey: 'zCjp1TGMSdSbRF7nFHubd9HWIhLYfAJY', q: term }
        });
        this.setState({ suggestions: response.data });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                <Autocomplete
                    suggestions={this.state.suggestions}
                    onChange={this.onSearchChange}
                />
            </div>);
    }
}

export default App;