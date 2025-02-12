import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooddetailsService {

  constructor() { }

  residArray:any[]=[]

  biryani = [
    {
      resid: 1,
      fooditems: [
        { foodid: 1, name: 'Chicken Biryani', price: 250, description: 'Leg Pieces', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Mutton Biryani', price: 310, description: 'Mutton tender pieces', image: 'https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg' },
        { foodid: 3, name: 'Pulav', price: 230, description: 'Pulav with chicken', image: 'https://media01.stockfood.com/largepreviews/MzUyNDA4ODY4/11368028-Veg-pulao-vegetarian-rice-dish-India.jpg' },
        { foodid: 4, name: 'Gulab Jamun', price: 80, description: '2 pieces with sugar syrup', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail-500x500.jpg' },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      ]
    },
    {
      resid: 2,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
      ]
    },

    {
      resid: 3,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
     
      ]
    },
    {
      resid: 4,
      fooditems: [
        { foodid: 1, name: "Andhra Chicken Biryani", price: 270, description: "Spicy and flavorful biryani", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Gongura Mutton", price: 340, description: "Tangy mutton curry with sorrel leaves", image: "https://hungryforever.net/wp-content/uploads/2017/02/gongura-mutton-600x450.jpg" },
        { foodid: 3, name: "Pesarattu", price: 120, description: "Green gram dosa with ginger chutney", image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGtD3H0ASlmSTzKYA5bxtTYjDmSA" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 5,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 6,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 7,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 8,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 9,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 10,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 11,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    }




  ]

  Indian=[
    {
      resid: 1,
      fooditems: [
        { foodid: 1, name: 'Chicken Biryani', price: 250, description: 'Leg Pieces', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Mutton Biryani', price: 310, description: 'Mutton tender pieces', image: 'https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg' },
        { foodid: 3, name: 'Pulav', price: 230, description: 'Pulav with chicken', image: 'https://media01.stockfood.com/largepreviews/MzUyNDA4ODY4/11368028-Veg-pulao-vegetarian-rice-dish-India.jpg' },
        { foodid: 4, name: 'Gulab Jamun', price: 80, description: '2 pieces with sugar syrup', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail-500x500.jpg' },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      ]
    },
    {
      resid: 2,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
      ]
    },

    {
      resid: 3,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
     
      ]
    },
    {
      resid: 4,
      fooditems: [
        { foodid: 1, name: "Andhra Chicken Biryani", price: 270, description: "Spicy and flavorful biryani", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Gongura Mutton", price: 340, description: "Tangy mutton curry with sorrel leaves", image: "https://hungryforever.net/wp-content/uploads/2017/02/gongura-mutton-600x450.jpg" },
        { foodid: 3, name: "Pesarattu", price: 120, description: "Green gram dosa with ginger chutney", image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGtD3H0ASlmSTzKYA5bxtTYjDmSA" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 5,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 6,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 7,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 8,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 9,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 10,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 11,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    }

  ]

  chinese=[

    {
      resid: 1,
      fooditems: [
        { foodid: 1, name: 'Chicken Biryani', price: 250, description: 'Leg Pieces', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Mutton Biryani', price: 310, description: 'Mutton tender pieces', image: 'https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg' },
        { foodid: 3, name: 'Pulav', price: 230, description: 'Pulav with chicken', image: 'https://media01.stockfood.com/largepreviews/MzUyNDA4ODY4/11368028-Veg-pulao-vegetarian-rice-dish-India.jpg' },
        { foodid: 4, name: 'Gulab Jamun', price: 80, description: '2 pieces with sugar syrup', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail-500x500.jpg' },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      ]
    },
    {
      resid: 2,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
      ]
    },

    {
      resid: 3,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
     
      ]
    },
    {
      resid: 4,
      fooditems: [
        { foodid: 1, name: "Andhra Chicken Biryani", price: 270, description: "Spicy and flavorful biryani", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Gongura Mutton", price: 340, description: "Tangy mutton curry with sorrel leaves", image: "https://hungryforever.net/wp-content/uploads/2017/02/gongura-mutton-600x450.jpg" },
        { foodid: 3, name: "Pesarattu", price: 120, description: "Green gram dosa with ginger chutney", image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGtD3H0ASlmSTzKYA5bxtTYjDmSA" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 5,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 6,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 7,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 8,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 9,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 10,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 11,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    }


  ]

  deserts=[
    {
      resid: 1,
      fooditems: [
        { foodid: 1, name: 'Chicken Biryani', price: 250, description: 'Leg Pieces', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Mutton Biryani', price: 310, description: 'Mutton tender pieces', image: 'https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg' },
        { foodid: 3, name: 'Pulav', price: 230, description: 'Pulav with chicken', image: 'https://media01.stockfood.com/largepreviews/MzUyNDA4ODY4/11368028-Veg-pulao-vegetarian-rice-dish-India.jpg' },
        { foodid: 4, name: 'Gulab Jamun', price: 80, description: '2 pieces with sugar syrup', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail-500x500.jpg' },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      ]
    },
    {
      resid: 2,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
      ]
    },

    {
      resid: 3,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
     
      ]
    },
    {
      resid: 4,
      fooditems: [
        { foodid: 1, name: "Andhra Chicken Biryani", price: 270, description: "Spicy and flavorful biryani", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Gongura Mutton", price: 340, description: "Tangy mutton curry with sorrel leaves", image: "https://hungryforever.net/wp-content/uploads/2017/02/gongura-mutton-600x450.jpg" },
        { foodid: 3, name: "Pesarattu", price: 120, description: "Green gram dosa with ginger chutney", image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGtD3H0ASlmSTzKYA5bxtTYjDmSA" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 5,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 6,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 7,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 8,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 9,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 10,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 11,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    }

  ]

  burger = [
    {
      resid: 1,
      fooditems: [
        { foodid: 1, name: 'Chicken Biryani', price: 250, description: 'Leg Pieces', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Mutton Biryani', price: 310, description: 'Mutton tender pieces', image: 'https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg' },
        { foodid: 3, name: 'Pulav', price: 230, description: 'Pulav with chicken', image: 'https://media01.stockfood.com/largepreviews/MzUyNDA4ODY4/11368028-Veg-pulao-vegetarian-rice-dish-India.jpg' },
        { foodid: 4, name: 'Gulab Jamun', price: 80, description: '2 pieces with sugar syrup', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail-500x500.jpg' },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      ]
    },
    {
      resid: 2,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
      ]
    },

    {
      resid: 3,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }
     
      ]
    },
    {
      resid: 4,
      fooditems: [
        { foodid: 1, name: "Andhra Chicken Biryani", price: 270, description: "Spicy and flavorful biryani", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Gongura Mutton", price: 340, description: "Tangy mutton curry with sorrel leaves", image: "https://hungryforever.net/wp-content/uploads/2017/02/gongura-mutton-600x450.jpg" },
        { foodid: 3, name: "Pesarattu", price: 120, description: "Green gram dosa with ginger chutney", image: "https://i.ytimg.com/vi/c0PQz7TF7RQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGtD3H0ASlmSTzKYA5bxtTYjDmSA" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 5,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 6,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 7,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 8,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 9,
      fooditems: [
        { foodid: 1, name: "Chettinad Chicken", price: 290, description: "Spicy South Indian chicken curry", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg" },
        { foodid: 2, name: "Appam with Stew", price: 180, description: "Soft rice pancakes with coconut stew", image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-chicken-stew-2.jpg?resize=960%2C1393" },
        { foodid: 3, name: "Mysore Pak", price: 150, description: "Rich ghee-based sweet", image: "https://indiasweethouse.in/cdn/shop/files/MaharajaMysorePak.png?v=1718866847" },
        { foodid: 4, name: "Bobbatlu", price: 100, description: "Sweet stuffed flatbread", image: "https://gpullareddysweets.com/cdn/shop/files/Bobbatalu.png?v=1723788954" },
        { foodid: 5, name: 'Chocolate Brownie', price: 150, description: 'Served with vanilla ice cream', image: 'https://thecookiedoughdiaries.com/wp-content/uploads/2024/06/HERO-triple-chocolate-brownies-5-FEATURED-500x500.jpg' },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    },
    {
      resid: 10,
      fooditems: [
        { foodid: 1, name: 'Hyderabadi Dum Biryani', price: 290, description: 'Slow-cooked flavorful biryani', image: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg' },
        { foodid: 2, name: 'Egg Biryani', price: 200, description: 'Biryani with boiled eggs', image: 'https://nishkitchen.com/wp-content/uploads/2016/02/Egg-Biryani-1B.jpg' },
        { foodid: 3, name: 'Prawns Biryani', price: 350, description: 'Spiced prawns with aromatic rice', image: 'https://pipingpotcurry.com/wp-content/uploads/2024/06/Shrimp-Biryani-Piping-Pot-Curry-2.jpg' },
        { foodid: 4, name: 'Rasmalai', price: 120, description: 'Soft paneer balls in sweetened milk', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg' },
        { foodid: 5, name: 'Carrot Halwa', price: 100, description: 'Traditional Indian dessert with nuts', image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg' },
        { foodid: 6, name: 'Veg Fried Rice', price: 180, description: 'Fried rice with mixed vegetables', image: 'https://www.terrafood.co.in/cdn/shop/files/VegFriedRice.jpg?crop=center&height=2048&v=1688209630&width=2048' },
        { foodid: 7, name: 'Chicken Manchurian', price: 220, description: 'Crispy chicken in Manchurian sauce', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenManchurian.webp' },
        { foodid: 8, name: 'Paneer Butter Masala', price: 200, description: 'Paneer cooked in buttery tomato gravy', image: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg' },
        { foodid: 9, name: 'Tandoori Chicken', price: 300, description: 'Grilled chicken with spices', image: 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg' },
        { foodid: 10, name: 'Lassi', price: 90, description: 'Sweet yogurt-based drink', image: 'https://images.indianexpress.com/2024/05/lassi.jpg' }
      
      ]
    },
    {
      resid: 11,
      fooditems: [
        { foodid: 1, name: "Lucknowi Biryani", price: 280, description: "Fragrant biryani with rich spices", image: "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" },
        { foodid: 2, name: "Paneer Tikka", price: 230, description: "Grilled paneer with spices", image: "https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-720x540.jpg" },
        { foodid: 3, name: "Mutton Rogan Josh", price: 320, description: "Rich and flavorful mutton curry", image: "https://recipes.timesofindia.com/thumb/53192600.cms?width=1200&height=900" },
        { foodid: 4, name: "Shahi Tukda", price: 130, description: "Royal Mughlai dessert with saffron", image: "https://palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-1.jpg" },
        { foodid: 5, name: "Tandoori Roti", price: 40, description: "Whole wheat Indian flatbread", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { foodid: 6, name: 'Hakka Noodles', price: 190, description: 'Stir-fried noodles with vegetables', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles-720x720.jpg' },
        { foodid: 7, name: 'Schezwan Chicken', price: 250, description: 'Spicy schezwan-style chicken', image: 'https://www.sharmispassions.com/wp-content/uploads/2023/06/SchezwanChicken_Step17.jpg' },
        { foodid: 8, name: 'Fish Tikka', price: 280, description: 'Grilled fish with Indian spices', image: 'https://cti.farziengineer.co/products/Achari_Fish_Tikka_1-650a3c74789c.png?auto=format&sharp=20&ixlib=react-9.3.0' },
        { foodid: 9, name: 'Mango Lassi', price: 110, description: 'Sweet mango-flavored yogurt drink', image: 'https://media.bluediamond.com/uploads/2023/01/24175942/14_Dairy-Free_Mango_Lassi-2430x1620.jpg' },
        { foodid: 10, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable spring rolls', image: 'https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg' }

      ]
    }


  ];

  getoptiondata(option:any){
    if (option=='Biryani'){
      this.residArray = this.biryani.map(item => item.resid);
    }

    if(option=='Burger'){
      this.residArray = this.burger.map(item => item.resid);
    }


    if(option=='Indian'){
      this.residArray=this.Indian.map(item => item.resid)
    }

    if(option=='Chinese'){
      this.residArray=this.chinese.map(item => item.resid)

    }
    if(option=='Deserts'){
      this.residArray=this.deserts.map(item => item.resid)

    }
    // if(option=='pizza'){
    //   this.index_pos=this.pizza.map(item => item.resid)
    // }
    // if(option=='pasta'){
    //   this.index_pos=this.pasta.map(item => item.resid)

    // }
  }

  getresiddata(){
    return of(this.residArray)
  }
  index_pos:any
  menuitems:any[]=[]
  userentereddata(userclicked:any,rid:any){

  if (userclicked=='Biryani'){
      this.index_pos=this.biryani.findIndex(e=>e.resid==rid)
      this.menuitems=this.biryani[this.index_pos].fooditems
    }
  if(userclicked=='Burger'){
      this.index_pos=this.burger.findIndex(e=>e.resid=rid)
      this.menuitems=this.burger[this.index_pos].fooditems
    }

    if(userclicked=='Indian'){
      this.index_pos=this.Indian.findIndex(e=>e.resid=rid)
      this.menuitems=this.Indian[this.index_pos].fooditems
    }

    if(userclicked=='chinese'){
      this.index_pos=this.chinese.findIndex(e=>e.resid=rid)
      this.menuitems=this.chinese[this.index_pos].fooditems
    }
    if(userclicked=='deserts'){
      this.index_pos=this.deserts.findIndex(e=>e.resid=rid)
      this.menuitems=this.deserts[this.index_pos].fooditems
    }
    if(userclicked=='pizza'){
      this.index_pos=this.burger.findIndex(e=>e.resid=rid)
      this.menuitems=this.burger[this.index_pos].fooditems
    }
    if(userclicked=='pasta'){
      this.index_pos=this.burger.findIndex(e=>e.resid=rid)
      this.menuitems=this.burger[this.index_pos].fooditems
    }
  
  }

  getmenudata(){
      return of(this.menuitems)
    }


    
  



  }





    
    
    


                     
    
  




  




