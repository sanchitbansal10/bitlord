// api key 3gzeoohwqn
import axios from 'axios';

let apikey = '3gzeoohwqn'


let getPnrStatus = function(pnrNo){
    let apikey = apikey
    https://api.railwayapi.com/v2/pnr-status/pnr/<pnr no>/apikey/<apikey>/
    axios.get(`https://api.railwayapi.com/v2/pnr-status/pnr/${pnrNo}/apikey/${apikey}/`)
    .then((response)=>{
        this.setState({data:response.data})
    })
}

/* pnrStatus response 
{
    "response_code": 200,
    "debit": 3,
    "pnr": "1234567890",
    "doj": "25-6-2017",
    "total_passengers": 3,
    "chart_prepared": true,
    "from_station": {
      "name": "Kopargaon",
      "code": "KPG"
    },
    "to_station": {
      "name": "Hazrat Nizamuddin",
      "code": "NZM"
    },
    "boarding_point": {
      "name": "Kopargaon",
      "code": "KPG"
    },
    "reservation_upto": {
      "name": "Hazrat Nizamuddin",
      "code": "NZM"
    },
    "train": {
      "name": "GOA EXPRESS",
      "number": "12779"
    },
    "journey_class": {
      "name": "SLEEPER CLASS",
      "code": "SL"
    },
    "passengers": [
      {
        "no": 1,
        "current_status": "RLWL/11",
        "booking_status": "RLWL/39/GN"
      },
      {
        "no": 2,
        "current_status": "RLWL/12",
        "booking_status": "RLWL/40/GN"
      },
      {
        "no": 3,
        "current_status": "RLWL/13",
        "booking_status": "RLWL/41/GN"
      }
    ]
  } */