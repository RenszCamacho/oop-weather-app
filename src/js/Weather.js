export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "3b03bf2b8e0b398ef104f4cef539b538";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWheather() {
    const URI = `https//api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`;
    const data = await fetch(URI);
    return data;
  }
}
