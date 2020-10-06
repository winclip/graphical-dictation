const VariantsList = {
  easy: [
    {
      id: 1,
      title: 'Черепашка',
      gameSteps: [39, 39, 40, 40, 40, 40, 39, 38, 38, 39, 38, 39, 39, 39, 39, 40, 39, 40, 40, 40, 37, 40, 37, 38, 37, 37, 37, 37, 40, 37, 38, 37, 38, 38, 38, 37, 38, 38],
      starterCoordinate: [2, 2],
      fieldSize: [13, 10],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/turtle.png',
      colorLine: '#006400',
    },
    {
      id: 2,
      title: 'Кораблик',
      gameSteps: [39, 39, 40, 37, 40, 39, 40, 39, 40, 39, 40, 40, 37, 37, 40, 37, 40, 39, 39, 39, 38, 39, 40, 40, 37, 40, 37, 40, 37, 37, 37, 37, 37, 38, 37, 38, 37, 38, 38, 39, 40, 39, 39, 39, 38, 38, 38, 38, 38, 38, 38, 38],
      starterCoordinate: [6, 2],
      fieldSize: [13, 15],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/ship.png',
      colorLine: '#0000CD',
    },
    {
      id: 3,
      title: 'Цветочек',
      gameSteps: [39, 39, 39, 40, 39, 40, 40, 37, 40, 37, 40, 40, 39, 38, 39, 40, 40, 37, 40, 37, 40, 37, 38, 37, 38, 37, 38, 38, 39, 40, 39, 38, 38, 39, 40, 39, 38, 38, 37, 38, 37, 38, 38, 39, 38],
      starterCoordinate: [3, 2],
      fieldSize: [9, 13],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/flower.png',
      colorLine: '#FF00FF',
    },
    {
      id: 4,
      title: 'Котёнок',
      gameSteps: [39, 40, 39, 39, 38, 39, 40, 40, 39, 39, 39, 39, 39, 38, 38, 37, 38, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 38, 38, 37, 40, 40, 37, 38, 38, 38, 37, 37, 37, 40, 40, 40, 37, 38, 38, 37, 40, 40, 37, 38, 38, 38, 38, 37, 38, 38, 38, 38],
      starterCoordinate: [2, 3],
      fieldSize: [14, 12],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/cat.png',
      colorLine: '#FF4500',
    },
    {
      id: 5,
      title: 'Сердечко',
      gameSteps: [39, 38, 39, 39, 40, 39, 40, 39, 38, 39, 40, 40, 39, 38, 39, 40, 40, 37, 40, 37, 40, 37, 38, 37, 38, 37, 38, 38, 39, 40, 39, 38, 38, 39, 40, 39, 38, 38, 37, 38, 37, 38, 38, 39, 38],
      starterCoordinate: [2, 3],
      fieldSize: [13, 12],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/heart.png',
      colorLine: '#8B0000',
    },
    {
      id: 6,
      title: 'Поросёнок',
      gameSteps: [40, 40, 40, 40, 39, 40, 39, 39, 38, 39, 39, 40, 39, 39, 38, 39, 38, 38, 39, 38, 38, 38, 38, 38, 39, 40, 37, 37, 37, 37, 37, 37, 38, 39, 40, 40, 40, 37, 37, 40, 37, 37, 37],
      starterCoordinate: [3, 5],
      fieldSize: [14, 12],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/pig.png',
      colorLine: '#FF69B4',
    },
    {
      id: 7,
      title: 'Щенок',
      gameSteps: [39, 38, 38, 38, 39, 39, 38, 39, 40, 40, 40, 39, 39, 39, 39, 39, 39, 38, 39, 38, 39, 40, 40, 37, 40, 40, 40, 40, 37, 40, 40, 37, 37, 37, 38, 39, 38, 37, 37, 40, 37, 40, 37, 37, 38, 39, 38, 38, 37, 38, 37, 37, 37, 38],
      starterCoordinate: [2, 6],
      fieldSize: [16, 13],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/puppy.png',
      colorLine: '#008080',
    },
    {
      id: 8,
      title: 'Домик',
      gameSteps: [39, 38, 39, 38, 39, 38, 39, 38, 39, 39, 40, 39, 40, 39, 40, 39, 38, 38, 37, 38, 39, 39, 39, 40, 37, 40, 40, 40, 40, 37, 40, 40, 40, 40, 40, 40, 37, 37, 37, 38, 38, 38, 37, 37, 40, 40, 40, 37, 37, 37, 38, 38, 38, 38, 38, 38, 37, 38],
      starterCoordinate: [2, 6],
      fieldSize: [15, 15],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/house.png',
      colorLine: '#4B0082',
    },
    {
      id: 9,
      title: 'Ёжик',
      gameSteps: [39, 39, 39, 40, 39, 38, 39, 39, 39, 39, 40, 39, 38, 39, 39, 38, 37, 38, 37, 38, 38, 37, 38, 37, 38, 37, 37, 37, 40, 37, 40, 37, 40, 37, 40, 40, 40],
      starterCoordinate: [2, 8],
      fieldSize: [15, 11],
      stepSize: 45,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/hedgehog.png',
      colorLine: '#2F4F4F',
    },
    {
      id: 10,
      title: 'Ёлочка',
      gameSteps: [39, 38, 39, 38, 39, 40, 39, 40, 39, 40, 37, 37, 40, 39, 40, 39, 40, 39, 40, 37, 37, 37, 40, 40, 40, 37, 38, 38, 38, 37, 37, 37, 38, 39, 38, 39, 38, 39, 38, 37, 37, 38],
      starterCoordinate: [3, 4],
      fieldSize: [11, 14],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/tree.png',
      colorLine: '#008000',
    },
    {
      id: 11,
      title: 'Змейка',
      gameSteps: [39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 39, 39, 38, 38, 38, 38, 38, 39, 39, 39, 40, 40, 40, 40, 40, 39, 38, 38, 38, 39, 39, 39, 40, 40, 40, 39, 38, 38, 38, 39, 39, 40, 37, 40, 40, 40, 37, 37, 37, 38, 38, 38, 37, 40, 40, 40, 37, 37, 37, 38, 38, 38, 38, 38, 37, 40, 40, 40, 40, 40, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 38, 38, 38],
      starterCoordinate: [2, 2],
      fieldSize: [19, 16],
      stepSize: 35,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/snake.png',
      colorLine: '#006400',
    },
    {
      id: 12,
      title: 'Плюшевый зайка',
      gameSteps: [39, 40, 40, 39, 38, 38, 39, 40, 40, 40, 40, 40, 37, 40, 39, 39, 39, 40, 37, 37, 40, 40, 39, 40, 37, 37, 38, 37, 40, 37, 37, 38, 39, 38, 38, 37, 37, 38, 39, 39, 39, 38, 37, 38, 38, 38, 38, 38],
      starterCoordinate: [4, 2],
      fieldSize: [11, 14],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/hare.png',
      colorLine: '#1E90FF',
    },
    {
      id: 13,
      title: 'Ключик',
      gameSteps: [39, 39, 39, 39, 39, 39, 39, 38, 39, 38, 39, 39, 40, 39, 40, 40, 40, 37, 40, 37, 37, 38, 37, 38, 37, 37, 37, 40, 37, 38, 37, 40, 37, 40, 37, 38, 38, 38],
      starterCoordinate: [2, 4],
      fieldSize: [15, 9],
      stepSize: 45,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/key.png',
      colorLine: '#B22222',
    },
    {
      id: 14,
      title: 'Слоник',
      gameSteps: [39, 39, 39, 39, 40, 39, 40, 39, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 37, 37, 38, 38, 38, 37, 37, 37, 40, 40, 40, 37, 37, 38, 38, 38, 38, 38, 37, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 38, 38],
      starterCoordinate: [3, 2],
      fieldSize: [14, 14],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/elephant.png',
      colorLine: '#4682B4',
    },
    {
      id: 15,
      title: 'Птичка',
      gameSteps: [39, 38, 39, 39, 39, 38, 38, 39, 38, 39, 39, 38, 39, 39, 39, 40, 40, 37, 37, 40, 37, 40, 39, 39, 39, 39, 39, 40, 37, 37, 37, 40, 37, 37, 37, 37, 37, 37, 37, 37, 37, 38],
      starterCoordinate: [2, 7],
      fieldSize: [16, 10],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/bird.png',
      colorLine: '#8B4513',
    },
    {
      id: 16,
      title: 'Робот',
      gameSteps: [39, 39, 39, 40, 39, 40, 37, 40, 37, 40, 39, 39, 39, 40, 37, 37, 40, 39, 40, 39, 40, 37, 37, 37, 38, 38, 37, 40, 40, 37, 37, 37, 38, 39, 38, 39, 38, 37, 37, 38, 39, 39, 39, 38, 37, 38, 37, 38, 39, 38],
      starterCoordinate: [4, 2],
      fieldSize: [11, 12],
      stepSize: 50,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/bot.png',
      colorLine: '#00008B',
    },
    {
      id: 17,
      title: 'Рыбка',
      gameSteps: [39, 38, 39, 39, 39, 38, 39, 39, 40, 39, 39, 40, 39, 38, 39, 38, 39, 38, 39, 38, 39, 39, 40, 40, 40, 37, 40, 37, 40, 40, 39, 40, 39, 40, 40, 40, 37, 37, 38, 37, 38, 37, 38, 37, 38, 37, 40, 37, 37, 40, 37, 37, 38, 37, 37, 37, 38, 37, 38, 38],
      starterCoordinate: [2, 6],
      fieldSize: [18, 14],
      stepSize: 35,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/fish.png',
      colorLine: '#800080',
    },
    {
      id: 18,
      title: 'Утёнок',
      gameSteps: [39, 38, 38, 39, 38, 39, 39, 39, 40, 39, 40, 40, 40, 40, 40, 40, 40, 39, 39, 39, 38, 39, 38, 39, 40, 40, 40, 40, 40, 37, 40, 37, 40, 37, 37, 37, 37, 37, 38, 37, 38, 37, 38, 38, 38, 39, 38, 38, 38, 38, 37, 37, 37, 38],
      starterCoordinate: [2, 5],
      fieldSize: [15, 17],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/duck.png',
      colorLine: '#FFA500',
    },
    {
      id: 19,
      title: 'Солнышко',
      gameSteps: [39, 40, 40, 40, 40, 39, 38, 39, 38, 39, 38, 39, 40, 37, 40, 37, 40, 37, 40, 39, 39, 39, 39, 40, 37, 37, 37, 37, 40, 39, 40, 39, 40, 39, 40, 37, 38, 37, 38, 37, 38, 37, 40, 40, 40, 40, 37, 38, 38, 38, 38, 37, 40, 37, 40, 37, 40, 37, 38, 39, 38, 39, 38, 39, 38, 37, 37, 37, 37, 38, 39, 39, 39, 39, 38, 37, 38, 37, 38, 37, 38, 39, 40, 39, 40, 39, 40, 39, 38, 38, 38, 38],
      starterCoordinate: [7, 2],
      fieldSize: [15, 15],
      stepSize: 40,
      stepWidth: 10,
      imgSrc: '/img/firstLvl/sun.png',
      colorLine: '#FF8C00',
    },
    {
      id: 20,
      title: 'Груша',
      gameSteps: [38, 38, 39, 40, 40, 39, 40, 39, 40, 40, 40, 39, 40, 40, 39, 40, 40, 39, 40, 40, 39, 40, 40, 40, 40, 37, 37, 40, 37, 37, 40, 37, 37, 37, 37, 37, 38, 37, 37, 38, 37, 37, 38, 38, 38, 38, 39, 38, 38, 39, 38, 38, 39, 38, 38, 39, 38, 38, 38, 39, 38, 39],
      starterCoordinate: [8, 4],
      fieldSize: [17, 22],
      stepSize: 30,
      stepWidth: 6,
      imgSrc: '/img/firstLvl/pear.png',
      colorLine: '#228B22',
    },

  ],
  medium: [
    {
      id: 1,
      title: 'Бабочка',
      gameSteps: [39, 40, 40, 40, 39, 38, 38, 39, 38, 38, 39, 39, 38, 39, 39, 40, 40, 40, 37, 40, 40, 40, 37, 40, 39, 40, 40, 39, 40, 40, 40, 37, 37, 38, 37, 37, 38, 38, 37, 38, 37, 40, 40, 37, 38, 38, 37, 40, 37, 40, 40, 37, 37, 40, 37, 37, 38, 38, 38, 39, 38, 38, 39, 38, 37, 38, 38, 38, 37, 38, 38, 38, 39, 39, 40, 39, 39, 40, 40, 39, 40, 40, 39, 38, 38, 38],
      starterCoordinate: [8, 4],
      fieldSize: [17, 16],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/butterfly.png',
      colorLine: '#C71585',
    },
    {
      id: 2,
      title: 'Белочка',
      gameSteps: [39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 39, 38, 38, 39, 38, 38, 37, 38, 38, 39, 38, 39, 38, 39, 39, 39, 40, 37, 40, 37, 40, 39, 40, 39, 40, 40, 40, 37, 40, 37, 37, 40, 37, 37, 37, 40, 37, 37, 37, 37, 38, 39, 38, 38, 39, 38, 38, 38, 37, 40, 37, 38, 38, 39, 39, 38, 37, 38, 38, 38, 39, 39, 38, 38, 38],
      starterCoordinate: [10, 4],
      fieldSize: [14, 18],
      stepSize: 35,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/squirrel.png',
      colorLine: '#FF4500',
    },
    {
      id: 3,
      title: 'Сторожевой пёс',
      gameSteps: [39, 39, 38, 39, 39, 38, 39, 40, 40, 40, 40, 40, 39, 39, 39, 39, 39, 39, 39, 38, 38, 39, 40, 40, 40, 37, 40, 40, 40, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 37, 37, 37, 37, 37, 37, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 37, 38, 38, 38, 38, 38, 37, 37, 37, 38, 38],
      starterCoordinate: [2, 4],
      fieldSize: [17, 17],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/dog.png',
      colorLine: '#191970',
    },
    {
      id: 4,
      title: 'Вертолёт',
      gameSteps: [39, 39, 39, 39, 39, 38, 37, 37, 38, 39, 39, 38, 39, 38, 39, 38, 38, 38, 37, 38, 37, 38, 37, 37, 38, 39, 39, 39, 39, 39, 38, 37, 37, 37, 37, 37, 38, 37, 40, 37, 37, 37, 37, 37, 40, 39, 39, 39, 39, 39, 40, 37, 37, 40, 37, 40, 37, 40, 40, 40, 39, 40, 39, 40, 39, 39, 40, 37, 37, 40],
      starterCoordinate: [2, 3],
      fieldSize: [15, 16],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/helicopter.png',
      colorLine: '#191970',
    },
    {
      id: 5,
      title: 'Гусь',
      gameSteps: [39, 39, 38, 39, 39, 40, 40, 40, 40, 40, 40, 39, 39, 39, 39, 39, 38, 39, 39, 39, 40, 37, 40, 40, 37, 40, 40, 37, 40, 40, 37, 37, 38, 39, 38, 37, 37, 40, 40, 37, 37, 38, 39, 38, 37, 37, 38, 38, 37, 38, 38, 38, 38, 38, 38, 37, 37, 38],
      starterCoordinate: [2, 3],
      fieldSize: [16, 16],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/goose.png',
      colorLine: '#00008B',
    },
    {
      id: 6,
      title: 'Динозавр',
      gameSteps: [37, 38, 39, 38, 39, 39, 40, 39, 40, 40, 40, 40, 40, 40, 39, 39, 39, 39, 39, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 37, 37, 38, 37, 37, 38, 37, 40, 40, 40, 37, 37, 38, 38, 38, 37, 40, 40, 40, 37, 37, 38, 38, 38, 37, 40, 40, 40, 37, 37, 38, 38, 38, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 38, 38, 39],
      starterCoordinate: [4, 4],
      fieldSize: [20, 18],
      stepSize: 35,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/dinosaur.png',
      colorLine: '#008000',
    },
    {
      id: 7,
      title: 'Жираф',
      gameSteps: [38, 38, 39, 39, 39, 38, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 39, 39, 39, 39, 39, 39, 39, 39, 38, 37, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 37, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 37, 37, 37, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 37, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37],
      starterCoordinate: [2, 5],
      fieldSize: [16, 23],
      stepSize: 30,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/giraffe.png',
      colorLine: '#008000',
    },
    {
      id: 8,
      title: 'Зонтик',
      gameSteps: [38, 38, 39, 38, 39, 38, 39, 38, 39, 39, 38, 39, 39, 38, 39, 39, 39, 40, 39, 39, 40, 39, 39, 40, 39, 40, 39, 40, 39, 40, 40, 37, 37, 37, 37, 37, 37, 37, 37, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 40, 37, 37, 37, 38, 37, 38, 38, 39, 40, 39, 40, 39, 38, 39, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 37, 37, 37, 37, 37, 37],
      starterCoordinate: [2, 9],
      fieldSize: [21, 21],
      stepSize: 30,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/umbrella.png',
      colorLine: '#FF0000',
    },
    {
      id: 9,
      title: 'Заяц',
      gameSteps: [39, 40, 40, 40, 39, 39, 40, 40, 37, 40, 40, 39, 39, 39, 40, 40, 40, 37, 38, 37, 40, 40, 39, 40, 40, 39, 39, 40, 37, 37, 37, 37, 37, 37, 38, 37, 38, 39, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
      starterCoordinate: [3, 2],
      fieldSize: [11, 18],
      stepSize: 35,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/bigHare.png',
      colorLine: '#006400',
    },
    {
      id: 10,
      title: 'Медведь',
      gameSteps: [39, 38, 39, 38, 38, 39, 39, 38, 39, 40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 40, 39, 40, 39, 40, 40, 40, 40, 40, 37, 40, 40, 40, 40, 40, 37, 37, 37, 37, 38, 38, 39, 38, 38, 38, 37, 37, 37, 37, 40, 40, 40, 40, 40, 37, 37, 37, 37, 38, 38, 39, 38, 38, 38, 37, 38, 37, 37, 38, 37, 37, 38, 38],
      starterCoordinate: [2, 6],
      fieldSize: [20, 17],
      stepSize: 35,
      stepWidth: 8,
      imgSrc: '/img/thirdLvl/bear.png',
      colorLine: '#8B4513',
    },
    {
      id: 11,
      title: 'Лебедь',
      gameSteps: [39, 40, 40, 39, 38, 39, 38, 39, 39, 39, 40, 39, 40, 39, 38, 38, 38, 38, 38, 39, 39, 40, 39, 40, 37, 37, 40, 40, 40, 40, 40, 40, 37, 40, 37, 37, 37, 37, 37, 37, 38, 37, 38, 37, 38, 38, 38, 38],
      starterCoordinate: [2, 5],
      fieldSize: [15, 13],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/swan.png',
      colorLine: '#008B8B',
    },
    {
      id: 12,
      title: 'Олень',
      gameSteps: [39, 40, 39, 38, 39, 40, 39, 38, 39, 40, 40, 37, 37, 37, 37, 40, 37, 40, 40, 40, 39, 40, 39, 39, 39, 39, 39, 39, 40, 40, 37, 38, 37, 40, 40, 40, 40, 40, 37, 38, 38, 37, 38, 37, 37, 40, 37, 40, 40, 37, 38, 38, 38, 38, 37, 38, 38, 38, 38, 37, 37, 38, 39, 38, 39, 39, 38, 39, 38, 38],
      starterCoordinate: [6, 2],
      fieldSize: [15, 17],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/deer.png',
      colorLine: '#8B4513',
    },
    {
      id: 13,
      title: 'Самолёт',
      gameSteps: [39, 38, 39, 39, 39, 39, 38, 39, 38, 39, 38, 39, 38, 39, 38, 39, 39, 39, 39, 40, 37, 40, 37, 40, 37, 40, 37, 40, 39, 39, 39, 38, 39, 38, 39, 38, 39, 40, 39, 40, 37, 40, 40, 37, 40, 37, 37, 37, 37, 37, 40, 39, 40, 39, 40, 39, 40, 39, 40, 37, 37, 37, 37, 38, 37, 38, 37, 38, 37, 38, 37, 38, 37, 37, 37, 37, 37, 38],
      starterCoordinate: [2, 8],
      fieldSize: [20, 16],
      stepSize: 35,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/airplane.png',
      colorLine: '#000080',
    },
    {
      id: 14,
      title: 'Слон',
      gameSteps: [40, 39, 39, 38, 38, 38, 39, 40, 40, 40, 40, 40, 39, 38, 38, 39, 40, 40, 39, 38, 38, 39, 39, 40, 40, 39, 38, 38, 39, 40, 40, 39, 38, 38, 38, 38, 38, 38, 38, 39, 40, 37, 37, 37, 37, 37, 37, 38, 38, 38, 37, 37, 37, 40, 37, 40, 37, 40, 40, 40, 40, 37],
      starterCoordinate: [2, 9],
      fieldSize: [16, 13],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/middleElephant.png',
      colorLine: '#2F4F4F',
    },
    {
      id: 15,
      title: 'Ель',
      gameSteps: [37, 40, 40, 37, 40, 37, 40, 40, 39, 38, 39, 40, 40, 37, 37, 40, 37, 40, 37, 40, 40, 39, 39, 38, 39, 38, 39, 40, 40, 37, 40, 37, 40, 37, 40, 37, 37, 40, 39, 39, 39, 39, 39, 40, 39, 38, 39, 39, 39, 39, 39, 38, 37, 37, 38, 37, 38, 37, 38, 37, 38, 38, 39, 40, 39, 40, 39, 39, 38, 38, 37, 38, 37, 38, 37, 37, 38, 38, 39, 40, 39, 38, 38, 37, 38, 37, 38, 38],
      starterCoordinate: [245, 2],
      fieldSize: [15, 19],
      stepSize: 7,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/spruce.png',
      colorLine: '#008000',
    },
    {
      id: 16,
      title: 'Кенгуру',
      gameSteps: [39, 38, 39, 39, 39, 39, 38, 37, 40, 40, 40, 40, 40, 39, 38, 39, 38, 39, 39, 40, 39, 40, 39, 40, 40, 40, 40, 40, 39, 40, 39, 39, 40, 37, 37, 37, 38, 37, 38, 37, 38, 38, 37, 40, 40, 40, 39, 40, 37, 37, 37, 37, 37, 38, 39, 39, 38, 39, 38, 37, 37, 38, 38, 37, 37, 40, 37, 38, 38, 39, 38, 38, 38, 37, 37, 38],
      starterCoordinate: [2, 4],
      fieldSize: [17, 16],
      stepSize: 40,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/kangaroo.png',
      colorLine: '#FF8C00',
    },
    {
      id: 17,
      title: 'Паровоз',
      gameSteps: [39, 39, 39, 39, 40, 40, 39, 39, 39, 38, 37, 38, 39, 39, 39, 39, 40, 37, 40, 39, 40, 40, 40, 37, 40, 37, 40, 37, 37, 38, 37, 38, 37, 40, 37, 40, 37, 37, 38, 37, 38, 37, 38, 38, 39, 38, 39, 39, 39, 38, 38, 37, 37, 40, 40, 37, 38, 38, 37, 38, 39, 39, 39, 39, 39, 39, 40, 37, 40, 40, 37],
      starterCoordinate: [3, 3],
      fieldSize: [15, 12],
      stepSize: 45,
      stepWidth: 8,
      imgSrc: '/img/secondLvl/locomotive.png',
      colorLine: '#800080',
    },
  ],
  hard: [
    {
      id: 1,
      title: 'Белка',
      gameSteps: [39, 38, 39, 38, 39, 38, 38, 39, 40, 39, 40, 40, 39, 40, 39, 39, 39, 38, 39, 38, 39, 39, 39, 39, 40, 39, 39, 40, 39, 40, 39, 40, 40, 39, 38, 39, 38, 38, 37, 37, 38, 38, 37, 37, 38, 37, 37, 37, 38, 38, 37, 38, 38, 39, 38, 39, 39, 38, 39, 39, 38, 39, 39, 39, 38, 39, 39, 39, 39, 40, 40, 40, 37, 40, 37, 40, 40, 40, 37, 40, 40, 39, 40, 39, 39, 40, 40, 40, 37, 40, 37, 40, 37, 37, 40, 40, 40, 37, 40, 37, 40, 37, 37, 37, 37, 37, 37, 38, 39, 39, 38, 37, 38, 38, 37, 37, 37, 40, 37, 40, 40, 37, 40, 37, 37, 38, 39, 38, 38, 38, 37, 38, 37, 37, 38, 37, 37, 38, 37, 37, 38, 38],
      starterCoordinate: [2, 13],
      fieldSize: [28, 24],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/bigSquirrel.png',
      colorLine: '#FF4500',
    },
    {
      id: 2,
      title: 'Большой Лебедь',
      gameSteps: [39, 39, 38, 39, 38, 39, 39, 39, 40, 40, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 40, 39, 39, 38, 39, 38, 39, 39, 38, 38, 39, 39, 38, 39, 39, 39, 39, 38, 39, 39, 39, 39, 40, 40, 37, 40, 40, 37, 40, 40, 39, 39, 38, 39, 38, 39, 39, 40, 37, 40, 40, 40, 37, 40, 37, 37, 40, 37, 40, 37, 37, 40, 37, 37, 37, 37, 37, 37, 37, 38, 37, 37, 37, 37, 38, 38, 37, 37, 38, 37, 38, 38, 38, 39, 38, 38, 39, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 38, 37, 37, 37, 38],
      starterCoordinate: [2, 4],
      fieldSize: [28, 25],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/bigSwan.png',
      colorLine: '#4169E1',
    },
    {
      id: 3,
      title: 'Краб',
      gameSteps: [39, 40, 40, 39, 40, 39, 40, 39, 40, 39, 38, 39, 39, 38, 39, 39, 39, 40, 39, 39, 40, 39, 38, 39, 38, 39, 38, 39, 38, 38, 39, 40, 39, 40, 37, 37, 40, 37, 40, 37, 40, 37, 40, 40, 39, 39, 40, 39, 39, 40, 40, 37, 38, 37, 37, 38, 37, 40, 40, 39, 40, 39, 40, 39, 40, 40, 40, 40, 37, 38, 37, 38, 39, 38, 38, 37, 38, 37, 38, 37, 40, 37, 40, 37, 37, 37, 37, 37, 38, 37, 38, 37, 40, 37, 40, 37, 40, 40, 39, 40, 37, 40, 37, 38, 38, 38, 38, 39, 38, 39, 38, 39, 38, 38, 37, 40, 37, 37, 40, 37, 38, 38, 39, 39, 38, 39, 39, 38, 38, 37, 38, 37, 38, 37, 38, 37, 37, 38, 39, 38],
      starterCoordinate: [3, 2],
      fieldSize: [23, 20],
      stepSize: 28,
      stepWidth: 6,
      imgSrc: '/img/secondLvl/crab.png',
      colorLine: '#8B0000',
    },
    {
      id: 4,
      title: 'Большой слон',
      gameSteps: [39, 39, 40, 40, 40, 40, 39, 40, 40, 40, 39, 39, 38, 39, 38, 39, 38, 39, 38, 39, 39, 39, 39, 40, 39, 40, 39, 40, 40, 40, 40, 37, 40, 37, 40, 37, 37, 39, 39, 38, 39, 38, 39, 38, 39, 39, 39, 39, 39, 39, 39, 39, 40, 39, 39, 39, 39, 38, 37, 40, 40, 40, 40, 40, 40, 40, 40, 37, 40, 40, 40, 40, 40, 40, 40, 37, 37, 37, 38, 38, 38, 38, 38, 38, 37, 37, 37, 37, 37, 37, 37, 40, 40, 40, 40, 40, 40, 37, 37, 37, 38, 38, 38, 38, 38, 38, 37, 37, 37, 38, 37, 37, 38, 37, 38, 38, 37, 37, 38, 37, 37, 38, 38, 38, 38, 37, 38, 38, 38, 38, 38, 38, 38, 38],
      starterCoordinate: [2, 2],
      fieldSize: [30, 27],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/bigElephant.png',
      colorLine: '#7B68EE',
    },
    {
      id: 5,
      title: 'Верблюд',
      gameSteps: [38, 38, 39, 38, 39, 39, 38, 39, 39, 38, 39, 40, 39, 40, 40, 40, 40, 40, 39, 38, 39, 38, 38, 39, 38, 39, 39, 40, 39, 40, 40, 39, 40, 39, 38, 39, 38, 38, 39, 38, 39, 39, 40, 39, 40, 40, 39, 40, 39, 40, 40, 40, 40, 37, 40, 40, 37, 40, 40, 40, 40, 40, 40, 40, 37, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 37, 38, 38, 37, 37, 37, 37, 37, 37, 40, 40, 37, 40, 40, 40, 40, 40, 37, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 37, 38, 38, 37, 37, 38, 38, 37, 38, 38, 38, 38, 38, 38, 37, 37, 40, 37, 37],
      starterCoordinate: [2, 7],
      fieldSize: [26, 24],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/camel.png',
      colorLine: '#8B4513',
    },
    {
      id: 6,
      title: 'Журавль',
      gameSteps: [39, 39, 39, 38, 39, 39, 40, 40, 40, 40, 40, 40, 39, 39, 38, 39, 39, 39, 39, 40, 39, 40, 40, 39, 40, 40, 39, 40, 40, 40, 37, 38, 37, 38, 37, 37, 37, 40, 40, 40, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 38, 37, 38, 37, 37, 38, 37, 38, 37, 38, 38, 38, 38, 38, 38, 37, 37, 37, 38],
      starterCoordinate: [2, 3],
      fieldSize: [18, 22],
      stepSize: 30,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/crane.png',
      colorLine: '#800080',
    },
    {
      id: 7,
      title: 'Лошадь',
      gameSteps: [38, 38, 39, 38, 39, 39, 38, 39, 39, 38, 39, 38, 38, 39, 40, 40, 39, 40, 39, 40, 40, 39, 40, 40, 39, 40, 40, 39, 40, 39, 39, 39, 39, 39, 39, 39, 39, 38, 39, 38, 39, 38, 39, 39, 40, 40, 39, 40, 40, 40, 40, 40, 40, 37, 38, 38, 37, 38, 38, 38, 37, 40, 37, 40, 40, 40, 40, 40, 40, 37, 40, 40, 40, 40, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 37, 38, 37, 38, 37, 38, 38, 37, 37, 37, 40, 37, 40, 37, 40, 37, 40, 40, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 38, 38, 37, 38, 38, 38, 37, 38, 38, 38, 38, 37, 38, 38, 38, 37, 37, 37, 37, 37, 37],
      starterCoordinate: [2, 9],
      fieldSize: [29, 29],
      stepSize: 24,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/horse.png',
      colorLine: '#000000',
    },
    {
      id: 8,
      title: 'Большой олень',
      gameSteps: [39, 38, 39, 38, 37, 37, 38, 37, 37, 38, 38, 39, 40, 39, 38, 39, 40, 40, 39, 39, 38, 37, 38, 38, 39, 40, 39, 40, 39, 39, 38, 39, 38, 39, 40, 40, 37, 40, 37, 37, 40, 37, 37, 40, 39, 39, 40, 37, 40, 39, 40, 39, 39, 40, 39, 39, 40, 39, 39, 39, 39, 39, 39, 39, 40, 40, 37, 38, 37, 40, 40, 39, 40, 39, 40, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 37, 38, 37, 40, 40, 40, 37, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 37, 37, 40, 37, 40, 37, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 38, 38, 37, 38, 37, 38, 38, 38, 37, 38, 37, 38, 37, 37, 38],
      starterCoordinate: [4, 8],
      fieldSize: [22, 23],
      stepSize: 28,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/bigDeer.png',
      colorLine: '#483D8B',
    },
    {
      id: 9,
      title: 'Попугай',
      gameSteps: [38, 38, 38, 39, 38, 39, 39, 38, 39, 39, 39, 39, 40, 39, 40, 39, 40, 39, 39, 40, 39, 40, 39, 39, 40, 39, 40, 39, 40, 40, 39, 40, 40, 39, 40, 40, 40, 39, 39, 40, 40, 37, 37, 37, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 37, 38, 38, 38, 38, 38, 37, 38, 38, 38, 38, 37, 38, 38, 38, 37, 40, 40, 37, 37, 37, 38, 39, 39, 38, 38, 37, 37, 38, 37, 37, 38, 37, 38, 37, 38, 38, 37, 38, 38, 37, 38, 38, 37, 37, 40, 37],
      starterCoordinate: [2, 7],
      fieldSize: [24, 30],
      stepSize: 23,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/parrot.png',
      colorLine: '#FF0000',
    },
    {
      id: 10,
      title: 'Самовар',
      gameSteps: [39, 39, 39, 39, 39, 40, 37, 40, 37, 40, 39, 39, 40, 39, 40, 40, 40, 39, 38, 39, 38, 37, 37, 40, 40, 40, 40, 40, 40, 37, 37, 40, 37, 37, 37, 37, 40, 37, 40, 39, 39, 38, 39, 40, 39, 39, 38, 37, 38, 37, 37, 37, 37, 38, 37, 37, 38, 38, 38, 38, 38, 38, 37, 37, 40, 39, 40, 39, 38, 38, 38, 39, 38, 39, 39, 38, 37, 38, 37, 38, 39, 39, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 40, 40, 37, 37, 40, 40, 40],
      starterCoordinate: [7, 7],
      fieldSize: [17, 23],
      stepSize: 28,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/samovar.png',
      colorLine: '#FF8C00',
    },
    {
      id: 11,
      title: 'Страус',
      gameSteps: [39, 38, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 39, 40, 39, 39, 38, 39, 39, 38, 39, 39, 39, 40, 39, 39, 40, 39, 39, 40, 39, 40, 40, 37, 38, 37, 37, 40, 37, 37, 40, 37, 37, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 37, 37, 37, 38, 39, 39, 38, 38, 38, 38, 38, 38, 38, 38, 37, 38, 38, 37, 37, 38, 37, 38, 37, 38, 37, 38, 38, 38, 38, 38, 38, 38, 37, 37, 38],
      starterCoordinate: [2, 3],
      fieldSize: [20, 27],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/ostrich.png',
      colorLine: '#8B4513',
    },
    {
      id: 12,
      title: 'Цапля',
      gameSteps: [39, 39, 39, 38, 39, 39, 40, 40, 40, 40, 40, 40, 37, 40, 40, 39, 38, 39, 38, 39, 39, 39, 39, 40, 39, 39, 40, 39, 40, 39, 39, 40, 39, 40, 40, 37, 37, 38, 37, 37, 40, 37, 37, 40, 40, 40, 40, 40, 40, 40, 40, 37, 37, 37, 38, 39, 39, 38, 38, 38, 38, 38, 38, 37, 37, 38, 37, 37, 38, 37, 37, 38, 37, 38, 38, 38, 38, 38, 39, 38, 38, 38, 37, 37, 37, 38],
      starterCoordinate: [2, 3],
      fieldSize: [20, 24],
      stepSize: 28,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/heron.png',
      colorLine: '#2F4F4F',
    },
    {
      id: 13,
      title: 'Лось',
      gameSteps: [37, 38, 37, 38, 37, 38, 37, 37, 37, 38, 38, 39, 38, 39, 39, 38, 37, 37, 37, 37, 38, 38, 39, 40, 39, 38, 39, 40, 39, 39, 39, 39, 39, 38, 39, 40, 39, 38, 39, 40, 40, 37, 37, 37, 37, 40, 39, 40, 39, 39, 39, 39, 39, 40, 39, 40, 39, 38, 37, 40, 40, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 37, 40, 40, 40, 40, 37, 38, 38, 38, 38, 37, 37, 37, 40, 40, 40, 40, 37, 38, 38, 38, 38, 37, 37, 37, 40, 40, 37, 38, 38, 38, 39, 39],
      starterCoordinate: [9, 11],
      fieldSize: [19, 17],
      stepSize: 35,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/elk.png',
      colorLine: '#4B0082',
    },
    {
      id: 14,
      title: 'Корова',
      gameSteps: [40, 37, 37, 37, 38, 38, 38, 37, 38, 39, 39, 38, 37, 40, 39, 39, 39, 38, 37, 40, 39, 39, 40, 37, 40, 40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 40, 39, 40, 39, 40, 37, 38, 37, 38, 37, 38, 40, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 40, 40, 40, 37, 38, 38, 38, 37, 40, 37, 40, 37, 38, 37, 40, 37, 38, 37, 38, 37, 40, 40, 40, 37, 38, 38, 38, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38],
      starterCoordinate: [6, 6],
      fieldSize: [20, 15],
      stepSize: 35,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/cow.png',
      colorLine: '#000000',
    },
    {
      id: 15,
      title: 'Баран',
      gameSteps: [39, 39, 39, 39, 40, 40, 39, 39, 38, 38, 39, 39, 39, 39, 40, 40, 40, 37, 37, 38, 39, 38, 37, 37, 40, 40, 40, 40, 37, 40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 40, 39, 40, 40, 40, 40, 37, 38, 38, 37, 40, 40, 40, 40, 40, 40, 37, 38, 38, 38, 37, 38, 38, 37, 37, 37, 37, 40, 40, 37, 40, 40, 40, 37, 38, 38, 38, 38, 38, 37, 38, 37, 37, 40, 40, 40, 39, 38, 38, 39, 38, 37, 38, 38, 38, 38, 37, 38, 38, 38, 38, 37, 37, 40, 39, 40, 37, 37, 38, 38, 38],
      starterCoordinate: [2, 2],
      fieldSize: [20, 19],
      stepSize: 35,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/ram.png',
      colorLine: '#006400',
    },
    {
      id: 16,
      title: 'Голубь',
      gameSteps: [39, 39, 39, 39, 40, 39, 40, 40, 40, 40, 39, 40, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 40, 40, 39, 39, 40, 39, 39, 40, 39, 40, 39, 40, 40, 37, 38, 37, 37, 37, 37, 38, 37, 38, 37, 37, 38, 37, 40, 37, 40, 40, 40, 40, 37, 37, 38, 39, 38, 38, 37, 37, 40, 40, 40, 37, 37, 38, 39, 38, 38, 38, 37, 38, 37, 37, 38, 37, 38, 38, 37, 38, 38, 38, 38, 39, 38, 39, 38, 39, 38, 38, 37, 38, 37, 37, 38, 39, 38, 38, 39, 38],
      starterCoordinate: [4, 2],
      fieldSize: [23, 25],
      stepSize: 28,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/bigDove.png',
      colorLine: '#483D8B',
    },
    {
      id: 17,
      title: 'Ослик',
      gameSteps: [40, 40, 37, 40, 40, 39, 40, 40, 40, 39, 40, 40, 40, 37, 40, 37, 37, 38, 37, 38, 37, 38, 37, 40, 40, 40, 40, 37, 40, 40, 37, 40, 37, 40, 40, 40, 40, 37, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 37, 38, 38, 38, 37, 37, 37, 37, 37, 37, 40, 40, 40, 37, 40, 40, 40, 40, 40, 37, 38, 38, 38, 38, 38, 38, 37, 38, 38, 38, 38, 38, 38, 37, 40, 40, 40, 37, 38, 38, 38, 38, 39, 38, 39, 38, 39, 39, 39, 39, 39, 39, 39, 39, 39, 38, 39, 39, 38, 39, 38, 39, 39, 38, 39, 38, 39, 38, 38, 38, 39, 40, 40, 39, 38, 39, 38, 39],
      starterCoordinate: [24, 2],
      fieldSize: [27, 27],
      stepSize: 25,
      stepWidth: 6,
      imgSrc: '/img/thirdLvl/donkey.png',
      colorLine: '#000080',
    },
  ],

};

export default VariantsList;