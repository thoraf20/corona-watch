import React from "react";
import {Cards,Chart,CountryPicker} from "./components";
import styles from "./app.module.css";
import {fetchData} from "./api";
import coronaImage from "./images/coronaImage3.jpg";


class App extends React.Component {
    state = {
        data: {},
        country: '',
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        });
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        });
    };

    render() {
        const {data,country} = this.state;
        return (
            < div className={styles.container} >
                <div className={styles.visual}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
            < br />
            </div>
            <br />
            < text >
                <b > Global and Country Wise Cases of Corona Virus </b>
                </text> 
            < text >
                <i> (For a particular country, select a Country from below) </i> 
                   </text>

            < Cards data={data} country={country} />
            < CountryPicker handleCountryChange={this.handleCountryChange} />
            < Chart data={data} country={country} />

            </ div>

        )
    };
}

export default App;

