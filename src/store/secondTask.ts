import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class Selector {
    countries: CountryInfo[] = []
    value: string = ''
    searchString: string = "";
    limit: number = 10;
    placeholder: string = "";

    constructor(limit: number = 10, placeholder: string = "") {
        this.limit = limit;
        this.placeholder = placeholder;
        makeAutoObservable(this);
    }

    setLimit(limit: number) {
        this.limit = limit;
    }

    setCountries(countries: CountryInfo[]) {
        this.countries = countries;
    }

    countryClick(fullName: string) {
        this.value = fullName;
        this.searchString = "";
        this.setCountries([]); 
    }

    getCountries() {
        getCountryByName(this.searchString).then((res) => this.setCountries(res));
    }

    inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.value = event.target.value
        this.searchString = event.target.value
        this.getCountries() 
    }
    
}

export default Selector
