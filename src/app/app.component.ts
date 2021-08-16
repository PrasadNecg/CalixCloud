import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calixcloud';

  masonAcctData = [
    {name:"Account", id:"123456"},
    {name:"Location ID", id:"KH25154825"},
    {name:"Phone No", id:"422-588-652"},
    {name:"Email", id:"name@example.com"},
    {name:"Address", id:"3386, Park Range"}
  ]

  masonData1 = [
    {name:"Data", id:"Signalnet 70M/10M"},
    {name:"Voice", id:"SIP 2 Line"},
    {name:"Video", id:"Media Room 6 HD"}
  ]

  masonData2 = [
    {name:"PPP0E Username", id:"JMason"},
    {name:"IP v4 Address", id:"87.157.199.33"},
    {name:"IP v6 Address", id:"2001:85a:0000:0000:370"}
  ]

  masonData3 = [
    {name:"Calls in last 30d", id:"3"},
    {name:"CommandIQ", id:"jay@example.com"}   
  ]

  
  ghzDataArray = [
    {head:"Wireless Radio Status", data:"Enabled"},
    {head:"Wireless Mode", data:"802.11ax"},
    {head:"Channel Mode", data:"Auto(6)"},
    {head:"Channel Bandwidth", data:"20MHz"},
    {head:"Noise Level", data:"-102dBm"}

  ]

  headers = [
    {head1:"SSID",head2:"Label",head3:"RSSI",head4:"Security",head5:"Channel Bandwidth",head6:"BSSID"}
  ];

  ghzDataArrayExtra = [
    {col1:"Hidden82",col2:6,col3:"-138m",col4:"wpa2",col5:"20MHz",col6:"82.425.ddd.29"},
    {col1:"Cinderella",col2:6,col3:"-138m",col4:"wpa2",col5:"20MHz",col6:"82.425.ddd.29"},
    {col1:"tESE",col2:6,col3:"-138m",col4:"wpa2",col5:"20MHz",col6:"82.425.ddd.29"},
    {col1:"MN4U",col2:6,col3:"-138m",col4:"wpa2",col5:"20MHz",col6:"82.425.ddd.29"},
    {col1:"Hidden66",col2:6,col3:"-138m",col4:"wpa2",col5:"20MHz",col6:"82.425.ddd.29"}   

  ]

  
}
