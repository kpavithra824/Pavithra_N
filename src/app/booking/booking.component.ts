import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private http:HttpClient) { }
  BookingModel:Booking=new Booking();
  BookingModels:Array<Booking>= new Array<Booking>();
  ngOnInit(): void {
    this.GetBookingData();
  }

  GetBookingData(){
    this.http.get("https://localhost:44333/api/1.0/flight/booking").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.BookingModels = res;
 }

 AddBooking(){
  
  var bookingdto = {
    CustomerName: this.BookingModel.customerName,
    EmailId: this.BookingModel.emailId,
    FlightId: Number(this.BookingModel.flightId),
    SeatsToBook: Number(this.BookingModel.seatsToBook),
    BookedOn:this.BookingModel.bookedOn
  }
  console.log(bookingdto);
  console.log(this.BookingModel);
  this.http.post("https://localhost:44333/api/1.0/flight/booking", bookingdto).subscribe(res => { this.GetBookingData(); console.log(res) }, res => console.log(res));
    this.BookingModel = new Booking();
    
  }

}
