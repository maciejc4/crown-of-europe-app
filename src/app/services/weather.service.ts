import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  description: string;
  icon: string;
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_URL = 'https://api.open-meteo.com/v1/forecast';
  private http = inject(HttpClient);

  async getWeather(latitude: number, longitude: number): Promise<WeatherData | null> {
    try {
      const params = [
        `latitude=${latitude}`,
        `longitude=${longitude}`,
        'current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
        'timezone=auto'
      ].join('&');

      const data = await firstValueFrom(
        this.http.get<OpenMeteoResponse>(`${this.API_URL}?${params}`)
      );

      const current = data.current;
      const weatherInfo = this.getWeatherInfo(current.weather_code);

      return {
        temperature: Math.round(current.temperature_2m),
        weatherCode: current.weather_code,
        windSpeed: Math.round(current.wind_speed_10m),
        humidity: current.relative_humidity_2m,
        description: weatherInfo.description,
        icon: weatherInfo.icon
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }

  private getWeatherInfo(code: number): { description: string; icon: string } {
    const weatherCodes: { [key: number]: { description: string; icon: string } } = {
      0: { description: 'Clear sky', icon: 'wb_sunny' },
      1: { description: 'Mainly clear', icon: 'wb_sunny' },
      2: { description: 'Partly cloudy', icon: 'partly_cloudy_day' },
      3: { description: 'Overcast', icon: 'cloud' },
      45: { description: 'Fog', icon: 'foggy' },
      48: { description: 'Depositing rime fog', icon: 'ac_unit' },
      51: { description: 'Light drizzle', icon: 'grain' },
      53: { description: 'Drizzle', icon: 'grain' },
      55: { description: 'Dense drizzle', icon: 'grain' },
      61: { description: 'Light rain', icon: 'water_drop' },
      63: { description: 'Rain', icon: 'water_drop' },
      65: { description: 'Heavy rain', icon: 'thunderstorm' },
      66: { description: 'Freezing rain', icon: 'ac_unit' },
      67: { description: 'Heavy freezing rain', icon: 'ac_unit' },
      71: { description: 'Light snow', icon: 'ac_unit' },
      73: { description: 'Snow', icon: 'ac_unit' },
      75: { description: 'Heavy snow', icon: 'ac_unit' },
      77: { description: 'Snow grains', icon: 'ac_unit' },
      80: { description: 'Light showers', icon: 'water_drop' },
      81: { description: 'Showers', icon: 'water_drop' },
      82: { description: 'Heavy showers', icon: 'thunderstorm' },
      85: { description: 'Light snow showers', icon: 'ac_unit' },
      86: { description: 'Heavy snow showers', icon: 'ac_unit' },
      95: { description: 'Thunderstorm', icon: 'thunderstorm' },
      96: { description: 'Thunderstorm with hail', icon: 'thunderstorm' },
      99: { description: 'Severe thunderstorm', icon: 'thunderstorm' }
    };

    return weatherCodes[code] || { description: 'Unknown', icon: 'help' };
  }
}
