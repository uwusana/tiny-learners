const cardsData = Object.freeze( {
  alphabets: [
    { id: 1, title: "A", image: "assets/images/alphabets/A.png" },
    { id: 2, title: "B", image: "assets/images/alphabets/B.png" },
    { id: 3, title: "C", image: "assets/images/alphabets/C.png" },
    { id: 4, title: "D", image: "assets/images/alphabets/D.png" },
    { id: 5, title: "E", image: "assets/images/alphabets/E.png" },
    { id: 6, title: "F", image: "assets/images/alphabets/F.png" },
    { id: 7, title: "G", image: "assets/images/alphabets/G.png" },
    { id: 8, title: "H", image: "assets/images/alphabets/H.png" },
    { id: 9, title: "I", image: "assets/images/alphabets/I.png" },
    { id: 10, title: "J", image: "assets/images/alphabets/J.png" },
    { id: 11, title: "K", image: "assets/images/alphabets/K.png" },
    { id: 12, title: "L", image: "assets/images/alphabets/L.png" },
    { id: 13, title: "M", image: "assets/images/alphabets/M.png" },
    { id: 14, title: "N", image: "assets/images/alphabets/N.png" },
    { id: 15, title: "O", image: "assets/images/alphabets/O.png" },
    { id: 16, title: "P", image: "assets/images/alphabets/P.png" },
    { id: 17, title: "Q", image: "assets/images/alphabets/Q.png" },
    { id: 18, title: "R", image: "assets/images/alphabets/R.png" },
    { id: 19, title: "S", image: "assets/images/alphabets/S.png" },
    { id: 20, title: "T", image: "assets/images/alphabets/T.png" },
    { id: 21, title: "U", image: "assets/images/alphabets/U.png" },
    { id: 22, title: "V", image: "assets/images/alphabets/V.png" },
    { id: 23, title: "W", image: "assets/images/alphabets/W.png" },
    { id: 24, title: "X", image: "assets/images/alphabets/X.png" },
    { id: 25, title: "Y", image: "assets/images/alphabets/Y.png" },
    { id: 26, title: "Z", image: "assets/images/alphabets/Z.png" }
  ],

  numbers: [
    { id: 1, title: "1", image: "assets/images/cards/numbers/1.png" },
    { id: 2, title: "2", image: "assets/images/cards/numbers/2.png" },
    { id: 3, title: "3", image: "assets/images/cards/numbers/3.png" },
    { id: 4, title: "4", image: "assets/images/cards/numbers/4.png" },
    { id: 5, title: "5", image: "assets/images/cards/numbers/5.png" }, 
    { id: 6, title: "6", image: "assets/images/cards/numbers/6.png" },
    { id: 7, title: "7", image: "assets/images/cards/numbers/7.png" },
    { id: 8, title: "8", image: "assets/images/cards/numbers/8.png" },
    { id: 9, title: "9", image: "assets/images/cards/numbers/9.png" },
    { id: 10, title: "10", image: "assets/images/cards/numbers/10.png" }
  ],

  fruits: [
    { id: 1, title: "Apple", image: "assets/images/cards/fruits/apple.png" },
    { id: 2, title: "Banana", image: "assets/images/cards/fruits/banana.png" },
    { id: 3, title: "Orange", image: "assets/images/cards/fruits/orange.png" },
    { id: 4, title: "Grapes", image: "assets/images/cards/fruits/grapes.png" },
    { id: 5, title: "Watermelon", image: "assets/images/cards/fruits/watermelon.png" }

  ],

  colors: [
    { id: 1, title: "Red", image: "assets/images/cards/colors/red.png" },
    { id: 2, title: "Blue", image: "assets/images/cards/colors/blue.png" },
    { id: 3, title: "Green", image: "assets/images/cards/colors/green.png" },
    { id: 4, title: "Yellow", image: "assets/images/cards/colors/yellow.png" },
    { id: 5, title: "Purple", image: "assets/images/cards/colors/purple.png" },
    { id: 6, title: "Orange", image: "assets/images/cards/colors/orange.png" },
    { id: 7, title: "Pink", image: "assets/images/cards/colors/pink.png" },
    {id: 8, title: "White", image: "assets/images/cards/colors/white.png" },
    { id: 9, title: "Black", image: "assets/images/cards/colors/black.png" }
  ],

  shapes: [
    { id: 1, title: "Circle", image: "assets/images/cards/shapes/circle.png" },
    { id: 2, title: "Square", image: "assets/images/cards/shapes/square.png" },
    { id: 3, title: "Triangle", image: "assets/images/cards/shapes/triangle.png" },
    { id: 4, title: "Rectangle", image: "assets/images/cards/shapes/rectangle.png" },
    { id: 5, title: "Star", image: "assets/images/cards/shapes/star.png" },
    { id: 6, title: "Heart", image: "assets/images/cards/shapes/heart.png" }

  ],

  animals: [
    { id: 1, title: "Dog", image: "assets/images/cards/animals/dog.png" },
    { id: 2, title: "Cat", image: "assets/images/cards/animals/cat.png" },
    { id: 3, title: "Elephant", image: "assets/images/cards/animals/elephant.png" },
    { id: 4, title: "Lion", image: "assets/images/cards/animals/lion.png" },
    { id: 5, title: "Tiger", image: "assets/images/cards/animals/tiger.png" },
    { id: 6, title: "Monkey", image: "assets/images/cards/animals/monkey.png" },
    { id: 7, title: "Rabbit", image: "assets/images/cards/animals/rabbit.png" }
  ],

  emotions: [
    { id: 1, title: "Happy", image: "assets/images/cards/emotions/happy.png" },
    { id: 2, title: "Sad", image: "assets/images/cards/emotions/sad.png" },
    { id: 3, title: "Angry", image: "assets/images/cards/emotions/angry.png" },
    { id: 4, title: "Surprised", image: "assets/images/cards/emotions/surprised.png" },
    { id: 5, title: "Scared", image: "assets/images/cards/emotions/scared.png" },
    { id: 6, title: "Excited", image: "assets/images/cards/emotions/excited.png" }
  ],

  weather: [
    { id: 1, title: "Sunny", image: "assets/images/cards/weather/sunny.png" },
    { id: 2, title: "Rainy", image: "assets/images/cards/weather/rainy.png" },
    { id: 3, title: "Cloudy", image: "assets/images/cards/weather/cloudy.png" },
    { id: 4, title: "Snowy", image: "assets/images/cards/weather/snowy.png" },
    { id: 5, title: "Windy", image: "assets/images/cards/weather/windy.png" },
    { id: 6, title: "Stormy", image: "assets/images/cards/weather/stormy.png" }
  ],

  family: [
    { id: 1, title: "Mother", image: "assets/images/cards/family/mother.png" },
    { id: 2, title: "Father", image: "assets/images/cards/family/father.png" },
    { id: 3, title: "Brother", image: "assets/images/cards/family/brother.png" },
    { id: 4, title: "Sister", image: "assets/images/cards/family/sister.png" },
    { id: 5, title: "Grandmother", image: "assets/images/cards/family/grandmother.png" },
    { id: 6, title: "Grandfather", image: "assets/images/cards/family/grandfather.png" }

  ]
});
