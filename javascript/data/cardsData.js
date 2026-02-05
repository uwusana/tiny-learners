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
    { id: 1, title: "1", image: "assets/images/numbers/1.png" },
    { id: 2, title: "2", image: "assets/images/numbers/2.png" },
    { id: 3, title: "3", image: "assets/images/numbers/3.png" },
    { id: 4, title: "4", image: "assets/images/numbers/4.png" },
    { id: 5, title: "5", image: "assets/images/numbers/5.png" }, 
    { id: 6, title: "6", image: "assets/images/numbers/6.png" },
    { id: 7, title: "7", image: "assets/images/numbers/7.png" },
    { id: 8, title: "8", image: "assets/images/numbers/8.png" },
    { id: 9, title: "9", image: "assets/images/numbers/9.png" },
    { id: 10, title: "10", image: "assets/images/numbers/10.png" }
  ],

  fruits: [
    { id: 1, title: "Apple", image: "assets/images/fruits/apple.png" },
    { id: 2, title: "Banana", image: "assets/images/fruits/banana.png" },
    { id: 3, title: "Orange", image: "assets/images/fruits/orange.png" },
    { id: 4, title: "Grapes", image: "assets/images/fruits/grapes.png" },
    { id: 5, title: "Watermelon", image: "assets/images/fruits/watermelon.png" }

  ],

  colors: [
    { id: 1, title: "Red", image: "assets/images/colors/red.png" },
    { id: 2, title: "Blue", image: "assets/images/colors/blue.png" },
    { id: 3, title: "Green", image: "assets/images/colors/green.png" },
    { id: 4, title: "Yellow", image: "assets/images/colors/yellow.png" },
    { id: 5, title: "Purple", image: "assets/images/colors/purple.png" },
    { id: 6, title: "Orange", image: "assets/images/colors/orange.png" },
    { id: 7, title: "Pink", image: "assets/images/colors/pink.png" },
    {id: 8, title: "White", image: "assets/images/colors/white.png" },
    { id: 9, title: "Black", image: "assets/images/colors/black.png" }
  ],

  shapes: [
    { id: 1, title: "Circle", image: "assets/images/shapes/circle.png" },
    { id: 2, title: "Square", image: "assets/images/shapes/square.png" },
    { id: 3, title: "Triangle", image: "assets/images/shapes/triangle.png" },
    { id: 4, title: "Rectangle", image: "assets/images/shapes/rectangle.png" },
    { id: 5, title: "Star", image: "assets/images/shapes/star.png" },
    { id: 6, title: "Heart", image: "assets/images/shapes/heart.png" }

  ],

  animals: [
    { id: 1, title: "Dog", image: "assets/images/animals/dog.png" },
    { id: 2, title: "Cat", image: "assets/images/animals/cat.png" },
    { id: 3, title: "Fish", image: "assets/images/animals/fish.png" },
    { id: 4, title: "Lion", image: "assets/images/animals/lion.png" },
    { id: 5, title: "Snake", image: "assets/images/animals/snake.png" },
    { id: 6, title: "Monkey", image: "assets/images/animals/monkey.png" },
    { id: 7, title: "Rabbit", image: "assets/images/animals/rabbit.png" },
    { id: 8, title: "Cow", image: "assets/images/animals/cow.png" }
  ],

  emotions: [
    { id: 1, title: "Happy", image: "assets/images/emotions/happy.png" },
    { id: 2, title: "Sad", image: "assets/images/emotions/sad.png" },
    { id: 3, title: "Angry", image: "assets/images/emotions/angry.png" },
    { id: 4, title: "Surprised", image: "assets/images/emotions/surprised.png" },
    { id: 5, title: "Scared", image: "assets/images/emotions/scared.png" },
    { id: 6, title: "Excited", image: "assets/images/emotions/excited.png" }
  ],

  weather: [
    { id: 1, title: "Sunny", image: "assets/images/weather/sunny.png" },
    { id: 2, title: "Rainy", image: "assets/images/weather/rainy.png" },
    { id: 3, title: "Cloudy", image: "assets/images/weather/cloudy.png" },
    { id: 4, title: "Snowy", image: "assets/images/weather/snowy.png" },
    { id: 5, title: "Windy", image: "assets/images/weather/windy.png" },
    { id: 6, title: "Stormy", image: "assets/images/weather/stormy.png" }
  ],

  family: [
    { id: 1, title: "Mother", image: "assets/images/family/mother.png" },
    { id: 2, title: "Father", image: "assets/images/family/father.png" },
    { id: 3, title: "Brother", image: "assets/images/family/brother.png" },
    { id: 4, title: "Sister", image: "assets/images/family/sister.png" },
    { id: 5, title: "Grandmother", image: "assets/images/family/grandmother.png" },
    { id: 6, title: "Grandfather", image: "assets/images/family/grandfather.png" }

  ]
});
