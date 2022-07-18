import { DecimalPipe } from "@angular/common";

export class Flight{
    flightId:number=0;
    airlineId:number=0;
    airlineName:string="";
    flightNumber:string="";
    fromplace:string="";
    toPlace:string="";
    startDatetime:string="";
    endDatetime:string="";
    scheduleDays:string="";
    instrumentUsed:string="";
    businessClassSeats:number=0;
    nonBusinessClassSeats:number=0;
    ticketPrice:string="";
    noOfRows:number=0;
    meal:string="";
    airlineLogo:string="";
}