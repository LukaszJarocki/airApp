import { WeatherData } from './../../models/weather.module';
import { WeatherServicesService } from './../../service/weather-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-weather-section',
  templateUrl: './api-weather-section.component.html',
  styleUrls: ['./api-weather-section.component.scss'],
})
export class APIWeatherSectionComponent implements OnInit {
  constructor(private weatherService: WeatherServicesService) {}

  cityName: string = 'Katowice';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
        console.log(this.weatherData);
      },
    });
  }
}
