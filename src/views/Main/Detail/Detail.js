import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
import {getDetails} from 'utils/googleApiHelpers'
import Griddle from 'griddle-react' 

import styles from './styles.module.css'

export class Detail extends React.Component {
  static childContextTypes = {
    router: T.object,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      innovation: [
        {
          "id": 0,
          "name": "Pizza",
          "value": 22
        },
        {
          "id": 1,
          "name": "Beer",
          "value": 37
        },
        {
          "id": 2,
          "name": "Pretzels and Beer Cheese",
          "value": 0
        },
        {
          "id": 3,
          "name": "Bacon Chicken Ranch Pizza",
          "value": 1
        },
        {
          "id": 4,
          "name": "Pesto Pizza",
          "value": 3
        },
        {
          "id": 5,
          "name": "Buffalo Chicken Pizza",
          "value": 0
        },
        {
          "id": 6,
          "name": "Mac and Cheese",
          "value": 0
        },
        {
          "id": 7,
          "name": "Cheesy Sticks",
          "value": 0
        },
        {
          "id": 8,
          "name": "Brethren Belgian",
          "value": 1
        },
        {
          "id": 9,
          "name": "Salad",
          "value": 0
        },
        {
          "id": 10,
          "name": "Sandwiches",
          "value": 3
        },
        {
          "id": 11,
          "name": "Spiced Full Bodied Red",
          "value": 1
        },
        {
          "id": 12,
          "name": "Orange Wit",
          "value": 1
        },
        {
          "id": 13,
          "name": "Rubottom's Red",
          "value": 2
        },
        {
          "id": 14,
          "name": "Rauchbier",
          "value": 0
        },
        {
          "id": 115,
          "name": "Margherita Pizza",
          "value": -1
        },
        {
          "id": 16,
          "name": "Green and Golden Ale",
          "value": 1
        },
        {
          "id": 17,
          "name": "Bubba Pizza",
          "value": 5
        },
        {
          "id": 18,
          "name": "BBQ chicken Pizza",
          "value": 5
        },
        {
          "id": 19,
          "name": "Pastrami Pizza",
          "value": 1
        },
        {
          "id": 20,
          "name": "Pizza Sub",
          "value": 0
        },
        {
          "id": 21,
          "name": "Apple Cobbler",
          "value": 1
        },
        {
          "id": 22,
          "name": "Graduate Pale Ale",
          "value": 1
        },
        {
          "id": 23,
          "name": "BAT Sandwich",
          "value": 1
        },
        {
          "id": 24,
          "name": "Storeys Stout",
          "value": 1
        },
        {
          "id": 25,
          "name": "Bronco Brown",
          "value": 3
        },
        {
          "id": 26,
          "name": "Class Clown Belgian",
          "value": 2
        },
        {
          "id": 27,
          "name": "Reign on Black",
          "value": 1
        },
        {
          "id": 28,
          "name": "Palomares Porter",
          "value": 1
        },
        {
          "id": 29,
          "name": "Pastrami Sandwich",
          "value": 0
        },
        {
          "id": 30,
          "name": "Strawberry shortcake",
          "value": 0
        },
        {
          "id": 31,
          "name": "Fudge Brownie",
          "value": 0
        },
        {
          "id": 32,
          "name": "California Pizza",
          "value": 2
        },
        {
          "id": 33,
          "name": "Ortiz Orange",
          "value": 3
        },
        {
          "id": 34,
          "name": "Pomona Queen Beer",
          "value": 1
        },
        {
          "id": 35,
          "name": "Irish red ale beer",
          "value": 1
        },
        {
          "id": 36,
          "name": "Amazing Grace beer",
          "value": 1
        },
        {
          "id": 37,
          "name": "Turkey avocado sandwich",
          "value": 1
        },
        {
          "id": 38,
          "name": "Buffalo Wing",
          "value": -2
        },
        {
          "id": 39,
          "name": "Caesar Salad",
          "value": -1
        },
        {
          "id": 40,
          "name": "Chicken club",
          "value": 1
        },
        {
          "id": 41,
          "name": "Indian Hill",
          "value": 1
        },
        {
          "id": 42,
          "name": "Donuts",
          "value": 1
        },
        {
          "id": 43,
          "name": "Orange wheat",
          "value": 1
        }
      ],
      Jhin: [
        {
          "id": 0,
          "name": "Teriyaki Bowl",
          "value": 82
        },
        {
          "id": 1,
          "name": "Gyoza",
          "value": 3
        },
        {
          "id": 2,
          "name": "California Roll",
          "value": 12
        },
        {
          "id": 3,
          "name": "Vegetable Yakisoba",
          "value": 2
        },
        {
          "id": 4,
          "name": "Tempura",
          "value": 8
        },
        {
          "id": 5,
          "name": "Spicy Tuna",
          "value": 11
        },
        {
          "id": 6,
          "name": "Spicy Pork",
          "value": 11
        },
        {
          "id": 7,
          "name": "Beef Bowl",
          "value": 22
        },
        {
          "id": 8,
          "name": "House Salad",
          "value": 6
        },
        {
          "id": 9,
          "name": "Crunch Rolls",
          "value": 8
        },
        {
          "id": 10,
          "name": "Sticky Pork",
          "value": 2
        },
        {
          "id": 11,
          "name": "Asian Taco",
          "value": 4
        },
        {
          "id": 12,
          "name": "Pork Bowl",
          "value": 6
        },
        {
          "id": 13,
          "name": "Jasmine Tea",
          "value": 6
        },
        {
          "id": 14,
          "name": "Spam Musubi",
          "value": 4
        },
        {
          "id": 115,
          "name": "Supreme Salad",
          "value": 2
        },
        {
          "id": 16,
          "name": "Chicken Plate",
          "value": 6
        },
        {
          "id": 17,
          "name": "Beef Plate",
          "value": 6
        },
        {
          "id": 18,
          "name": "Kimchi",
          "value": 4
        },
        {
          "id": 19,
          "name": "Salad",
          "value": 4
        },
        {
          "id": 20,
          "name": "Sushi",
          "value": 2
        }
      ],
      zoro: [
        {
          "id": 0,
          "name": "Pink Lychee",
          "value": 7
        },
        {
          "id": 1,
          "name": "Strawberry Horchata",
          "value": 11
        },
        {
          "id": 2,
          "name": "Pink Guava",
          "value": 23
        },
        {
          "id": 3,
          "name": "Strawberry Mojito",
          "value": 25
        },
        {
          "id": 4,
          "name": "Strawberry Lychee Slushi",
          "value": 7
        },
        {
          "id": 5,
          "name": "Chocolate Macaroon",
          "value": 4
        },
        {
          "id": 6,
          "name": "Jasmine Milk Tea",
          "value": 8
        },
        {
          "id": 7,
          "name": "Smores Sundae",
          "value": 6
        },
        {
          "id": 8,
          "name": "Strawberry Milk",
          "value": 4
        },
        {
          "id": 9,
          "name": "Chamango Sundae",
          "value": 8
        },
        {
          "id": 10,
          "name": "Potted Sundae",
          "value": 6
        },
        {
          "id": 11,
          "name": "X Sundae",
          "value": 4
        },
        {
          "id": 12,
          "name": "Cofe Horchata",
          "value": 13
        },
        {
          "id": 13,
          "name": "Strawberry Tea",
          "value": 2
        },
        {
          "id": 14,
          "name": "X Coffee",
          "value": 6
        },
        {
          "id": 15,
          "name": "Rain Drop Cake",
          "value": 8
        },
        {
          "id": 16,
          "name": "Thai Tea",
          "value": 2
        },
        {
          "id": 17,
          "name": "Mangonada",
          "value": 4
        },
        {
          "id": 18,
          "name": "Freezy Matcha",
          "value": 2
        },
        {
          "id": 19,
          "name": "Watermelon Slush",
          "value": 4
        },
        {
          "id": 20,
          "name": "Sea Salt Green Tea",
          "value": 4
        },
        {
          "id": 21,
          "name": "Strawberry Milk",
          "value": 3
        },
        {
          "id": 22,
          "name": "Oranje Mojito",
          "value": 4
        },
        {
          "id": 23,
          "name": "Vietnamese Coffee",
          "value": 1
        },
        {
          "id": 24,
          "name": "Lychee Slush",
          "value": 2
        },
        {
          "id": 25,
          "name": "Coconut Coffee",
          "value": 2
        },
        {
          "id": 26,
          "name": "Hibiscus Tea",
          "value": 4
        },
        {
          "id": 27,
          "name": "French Macaroons",
          "value": 2
        }
      ],
      Einstein: [
        {
            "id": 0,
            "name": "Bagels",
            "value": 4
        },
        {
            "id": 1,
            "name": "Coffee",
            "value": 3
        },
        {
            "id": 2,
            "name": "Blueberry Lemonade",
            "value": 1
        },
        {
          "Id": 3, 
          "name": "Tasty Turkey",
          "value": 4
        },
        {
          "Id": 4,
          "name": "Salad",
          "value": 1
        },
        {
          "Id": 5, 
          "name": "Yogurt",
          "value": 1
        },
        {
          "id": 6,
          "name": "BAT Turkey",
          "value": 2
        },
        {
          "id": 7,
          "name": "Egg and Mushroom",
          "value": 0
        },
        {
          "id": 8, 
          "name": "Frappuccino",
          "value": -1 
        },
        {
          "id": 9,
          "name": "Fruit",
          "value": 3
        },
        {
          "id": 10,
          "name": "Asiago Bagel",
          "value": 0
        },
        {
          "id": 11,
          "name": "Strawberry Bagel",
          "value": 1
        },
        {
          "id": 12,
          "name": "Iced Coffee",
          "value": 1
        },
        {
          "id": 13,
          "name": "Turkey Sasauge and Egg",
          "value": -2
        },
        {
          "id": 14,
          "name": "Ham and Egg",
          "value": 1
        },
        {
          "id": 15,
          "name": "Lox Bagel",
          "value": 1
        },
        {
          "id": 16,
          "name": "Chocolate Chip Bagel",
          "value": 1
        },
        {
          "id": 17,
          "name": "Chicken Salad",
          "value": 1
        }
      ],
      Currry: [
        {
          "id": 0,
          "name": "Garlic Naan",
          "value": 53
        },
        {
          "id": 1,
          "name": "Fish Curry",
          "value": 2
        },
        {
          "id": 2,
          "name": "Veggie Curry",
          "value": 8
        },
        {
          "id": 3,
          "name": "Chicken Tikka",
          "value": 84
        },
        {
          "id": 4,
          "name": "Goat Curry",
          "value": 17
        },
        {
          "id": 5,
          "name": "Coconut Chicken",
          "value": 18
        },
        {
          "id": 6,
          "name": "Saag Paneer",
          "value": 5
        },
        {
          "id": 7,
          "name": "Salad",
          "value": -5
        },
        {
          "id": 8,
          "name": "Chicken Biryani",
          "value": 1
        },
        {
          "id": 9,
          "name": "Chicken Kabob",
          "value": -2
        },
        {
          "id": 10,
          "name": "Chicken Korma",
          "value": 21
        },
        {
          "id": 11,
          "name": "Rice",
          "value": 12
        },
        {
          "id": 12,
          "name": "Spinach Curry",
          "value": 5
        },
        {
          "id": 13,
          "name": "Mango Lassi",
          "value": 8
        },
        {
          "id": 14,
          "name": "Channa Somosa",
          "value": 11
        },
        {
          "id": 15,
          "name": "Fish Curry",
          "value": -4
        }
      ],
      loading: true,
      place: {},
      location: {}
    }
  }

  componentDidMount() {
    if (this.props.map) {
      this.getDetails(this.props.map)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.map &&
        (prevProps.map !== this.props.map ||
         prevProps.params.placeId !== this.props.params.placeId)) {
      this.getDetails(this.props.map);
    }
  }

  renderPhotos(place) {
    if (!place.photos || place.photos.length == 0) return;

    const cfg = {maxWidth: 100, maxHeight: 100}
    return (<div className={styles.photoStrip}>
      {place.photos.map(p => {
        const url = `${p.getUrl(cfg)}.png`
        return (<img key={url} src={url} />)
      })}
    </div>)
  }

  getDetails(map) {
    const {google, params} = this.props;
    const {placeId} = params;

    this.setState({
      loading: true
    }, () => {
      getDetails(google, map, placeId)
        .then((place) => {
          const {location} = place.geometry;
          const loc = {
            lat: location.lat(),
            lng: location.lng()
          }
          console.log(place.name);
          this.setState({
            place,
            location: loc,
            loading: false
          })
        })
    });
  }


  render() {
    if (this.state.loading) {
      return (<div className={styles.wrapper}>
        Loading...
      </div>)
    }

    const {place} = this.state;
    let temp = this.state.innovation;
    if(place.name == "Innovation Brew Works") {
      temp = this.state.innovation;
    }
    if(place.name == "Curry Up") {
      temp = this.state.Currry;
    }
    if(place.name == "Jinza Teriyaki") {
      temp = this.state.Jhin;
    }
    if(place.name == "Zero X") {
      temp = this.state.zoro;
    }
    console.log(temp);
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{place.name}</h2>
        </div>
        <div className={styles.details}>
          {this.renderPhotos(place)}
        </div>
        <div>
          <Griddle results={temp} />
        </div>

      </div>
    )
  }
}

export default Detail
