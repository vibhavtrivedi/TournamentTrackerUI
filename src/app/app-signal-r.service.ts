import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppSignalRService {
  private hubConnection: signalR.HubConnection | undefined;
  constructor() {

  }

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:7235/notificationHub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    }).build();
    this.hubConnection.start().then(() => {
      console.log("Hub connection started");
    }).catch((err) => {
      console.error(err);
    })
  }
  // startConnection(): Observable<void> {
  //   return new Observable<void>((observer) => {
  //     this.hubConnection?.start().then(() => {
  //       console.log("connection stablished with signalR");
  //       // observer.next();
  //       // observer.complete();
  //     }).catch((error) => {
  //       console.error('Error connecting to SignalR hub:', error);
  //       // observer.error(error);
  //     })
  //   })
  // }

  receiveMessage() {
    console.log("receive message invoked");
      this.hubConnection?.on('askServerResponse', (message: string) => {
        console.log('re', message);
      })
  }

  sendMessage(message: string): void{
    console.log('me', message);
    this.hubConnection?.invoke('BroadCastMessage', message).catch((err) => {
      console.error(err);
    })
  }
}
