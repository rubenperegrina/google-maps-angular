import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasPosition = false;
  position = {
    lat: 41.25,
    lng: 1.55
  };

  label = {
    color: 'white',
    text: 'You are here'
  }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.position.lat = position.coords.latitude;
        this.position.lng = position.coords.longitude;
        this.hasPosition = true;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
