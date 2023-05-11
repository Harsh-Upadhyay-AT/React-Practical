const intialState = {
  classicalPizza: [
    {
      id: "c1",
      name: "Pizza margherita",
      type: "pizzaMargherita",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_5fsT42_8JRbjWucJxRiTaaBSvt1HaP6D-ReOkUmRJ3oI7i8pbS1lZUXkUAszM1uB2E&usqp=CAU",
      price: 125,
    },
    {
      id: "c2",
      name: "Pizza capricciosa",
      type: "pizzaCapricciosa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE34A5rNOJUu-yEysulpUNsxD_qw93tmKpik7LedNf8XmaJAzMrtLsUW4YZ83FndAiz4g&usqp=CAU",
      price: 161,
    },
    {
      id: "c3",
      name: "Quattro stagioni",
      type: "quattroStagioni",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWekLnT5nv1tl3ODAhsJaXq5Bj8oq9LwNxL_E4HeCIaj4q-B-nUX_-hlbLjw59czhdq_Y&usqp=CAU",
      price: 299,
    },
    {
      id: "c4",
      name: "Pizza porchetta",
      type: "pizzaPorchetta",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OvkVqy9Ym49tBWbxAJ61WxkA3lTJpDerJSfZA6SvH3nAFhd9vvoqcgxl1KR9qQN8npQ&usqp=CAU",
      price: 189,
    },
    {
      id: "c5",
      name: "Cheese pizza",
      type: "cheesePizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2szu9GFlTojyxsQw6ktYYINMXMw1XNfVFUNXvNgTkb1zd5AuNLVl8mRBIUb-sRaansl4&usqp=CAU",
      price: 899,
    },
  ],

  extravaganzapizza: [
    {
      id: "e1",
      name: "Veggie pizza",
      type: "veggiePizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEy8OnbEfmmylda5OKjPOSnKGzTyeY5cbDy8P5bck2R5r3zcJFEokf_ty3aGAVGQYc9U&usqp=CAU",
      price: 299,
    },
    {
      id: "e2",
      name: "Pepperoni pizza",
      type: "pepperoniPizza",
      img: "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp",
      price: 160,
    },
    {
      id: "e3",
      name: "Margherita pizza",
      type: "margheritaPizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLoXqRwb9B1Nw5dZfglFxt4tafwNLUsmx1nnDo72JwyfD1hFZJmSUV1e4u0BIPdXsgO4&usqp=CAU",
      price: 199,
    },
    {
      id: "e4",
      name: "BBQ Chicken Pizza",
      type: "extravaganzaPizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7Kczgm40r56EH6KiNV_jOQdRKGkfVC3oMY2V9wsZEJbXdNI8gExsJztI_QYqLDQnNP0&usqp=CAU",
      price: 899,
    },
    {
      id: "e5",
      name: "Hawaiian pizza",
      type: "hawaiianPizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLoXqRwb9B1Nw5dZfglFxt4tafwNLUsmx1nnDo72JwyfD1hFZJmSUV1e4u0BIPdXsgO4&usqp=CAU",
      price: 189,
    },
  ],

  meals: [
    {
      id: "m1",
      name: "Bread",
      type: "bread",
      img: "https://thewoksoflife.com/wp-content/uploads/2015/01/milk-bread-6.jpg",
      price: 229,
    },
    {
      id: "m2",
      name: "Sandwich",
      type: "sandWich",
      img: "https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800",
      price: 165,
    },
    {
      id: "m3",
      name: "Fruit-salad",
      type: "fruitSalad",
      img: "https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=0.6668xw:1xh;center,top&resize=1200:*",
      price: 129,
    },
    {
      id: "m4",
      name: "Burger",
      type: "burger",
      img: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all",
      price: 189,
    },
    {
      id: "m5",
      name: "Ice-cream",
      type: "iceCream",
      img: "https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg",
      price: 199,
    },
  ],
  isLoading: false,
};

const productReduser = (state = intialState, action) => {
  switch (action.type) {
    case "value":
      break;
    default:
      return state;
  }
};
export default productReduser;
