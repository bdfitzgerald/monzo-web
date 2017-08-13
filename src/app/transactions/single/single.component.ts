import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

export class TransactionsSingle implements OnInit {

  transaction: any;

  constructor(private location: Location) { }

  ngOnInit() {
    this.transaction =  {
      "id": "tx_00009M8leeys8rWzrtj8sb",
      "created": "2017-07-05T17:10:23.51Z",
      "description": "TESCO STORES 6135      LOUGHBOROUGH  GBR",
      "amount": -2218,
      "currency": "GBP",
      "merchant": {
        "id": "merch_000097YqD8QTvd8VZa6ezh",
        "group_id": "grp_000092JYpvjM7VZJ1X0Ukr",
        "created": "2016-04-25T15:02:25.507Z",
        "name": "Tesco",
        "logo": "https://mondo-logo-cache.appspot.com/twitter/Tesco/?size=large",
        "emoji": "🍏",
        "category": "groceries",
        "online": false,
        "atm": false,
        "address": {
          "short_formatted": "1 The Rushes, Loughborough LE11 5BE",
          "formatted": "1 The Rushes, Loughborough LE11 5BE, United Kingdom",
          "address": "1 the Rushes",
          "city": "Loughborough",
          "region": "",
          "country": "GBR",
          "postcode": "LE11 5BE",
          "latitude": 52.77420799999999,
          "longitude": -1.208319,
          "zoom_level": 17,
          "approximate": false
        },
        "updated": "2016-06-06T08:04:06.403Z",
        "metadata": {
          "created_for_merchant": "merch_000092JYpvhEFProuw0nRJ",
          "created_for_transaction": "tx_000097YqD7DgPjg2y88tzV",
          "enriched_from_settlement": "tx_000098h30FggWG5EQj0oZl",
          "foursquare_category": "Grocery Store",
          "foursquare_category_icon": "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_88.png",
          "foursquare_id": "4fa002a07beb7ebce8fb6ffb",
          "foursquare_website": "http://www.tesco.com",
          "google_places_icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
          "google_places_id": "ChIJ_b_l6bDgeUgRfFrMswMeYlo",
          "google_places_name": "Tesco Superstore",
          "suggested_name": "Tesco Express",
          "suggested_tags": "#shopping #food",
          "twitter_id": "Tesco",
          "website": "http://www.tesco.com"
        },
        "disable_feedback": false
      },
      "notes": "",
      "metadata": {},
      "account_balance": 1347,
      "attachments": [],
      "category": "groceries",
      "is_load": false,
      "settled": "2017-07-06T13:06:16.61Z",
      "local_amount": -2218,
      "local_currency": "GBP",
      "updated": "2017-07-06T18:01: 55.942Z",
      "account_id": "acc_00009CqVf46RE6PCnHHt0z",
      "counterparty": {},
      "scheme": "gps_mastercard",
      "dedupe_id": "850774422170705606146016103",
      "originator": false,
      "include_in_spending": true
    }
  }

  back() {
    this.location.back();
  }

}
