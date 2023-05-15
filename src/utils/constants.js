import latteImage from '../img/menu-latte.jpg';
import espressoImage from '../img/menu-espresso.jpg';
import cappuccinoImage from '../img/menu-cappuccino.jpg';
import teaImage from '../img/menu-tea.jpg';
import flatwhiteImage from '../img/menu-flatwhite.jpg';
import smoothieImage from '../img/menu-smoothie.jpg';
import John from '../img/John.jpg';
import Mike from '../img/Mike.jpg';
import Jane from '../img/Jane.jpg';
import Sarah from '../img/Sarah.jpg';
import David from '../img/David.jpg';
import Emily from '../img/Emily.jpg';
import coffeeWorkshop from '../img/event-workshop.jpg';
import musicNight from '../img/event-music.jpg';
import latteArt from '../img/event-art.jpg';

export const menuItems = [
    { id: 1, name: 'Latte', price: '$5', description: 'Delicious latte', image: latteImage, ingredients: 'Espresso, Steamed milk, Foam' },
    { id: 2, name: 'Espresso', price: '$3', description: 'Strong espresso', image: espressoImage, ingredients: 'Espresso' },
    { id: 3, name: 'Cappuccino', price: '$4', description: 'Creamy cappuccino', image: cappuccinoImage, ingredients: 'Espresso, Steamed milk, Thick foam' },
    { id: 4, name: 'Tea', price: '$3', description: 'Fragrant tea', image: teaImage, ingredients: 'Tea leaves, Boiling water' },
    { id: 5, name: 'Flat White', price: '$6', description: 'Bracing Flat White', image: flatwhiteImage, ingredients: 'Espresso, Steamed milk' },
    { id: 6, name: 'Smoothies', price: '$10', description: 'Nutritious smoothies', image: smoothieImage, ingredients: 'Fruits, Yogurt, Ice' },
  ];
  
  export const reviews = [
    { id: 1, author: 'John Doe', content: 'Great coffee and cozy atmosphere!', rating: 5, date: '2023-02-20', image: John },
    { id: 2, author: 'Jane Smith', content: 'The best coffee shop in town!', rating: 4.5, date: '2023-03-10', image: Jane },
    { id: 3, author: 'Mike Johnson', content: 'Friendly staff and delicious drinks!', rating: 4, date: '2023-04-15', image: Mike },
    { id: 4, author: 'Sarah Williams', content: 'Amazing selection of drinks!', rating: 5, date: '2023-04-25', image: Sarah },
    { id: 5, author: 'David Thompson', content: 'Highly recommend the lattes!', rating: 4.8, date: '2023-05-05', image: David },
    { id: 6, author: 'Emily Davis', content: 'Great place for coffee lovers!', rating: 5, date: '2023-05-12', image: Emily },
  ];
  
  export const events = [
    {
      id: 1, 
      title: 'Coffee Tasting Workshop', 
      date: 'May 20, 2023', 
      location: 'Coffee Shop', 
      description: "A unique opportunity for coffee lovers and enthusiasts alike to deepen their understanding of coffee! Join us for an immersive coffee tasting workshop where you'll learn about the journey from bean to cup, different coffee varieties, brewing methods, and of course, how to taste and appreciate the subtle flavors of coffee.", 
      image: coffeeWorkshop
    },
    {
      id: 2, 
      title: 'Live Music Night', 
      date: 'June 2, 2023', 
      location: 'Coffee Shop', 
      description: "Unwind with us on a relaxing evening filled with enchanting live performances. We've lined up some of the best local talents to serenade you as you enjoy your favorite coffee. An experience that promises good tunes, good coffee, and good company.", 
      image: musicNight
    },
    {
      id: 3, 
      title: 'Latte Art Competition', 
      date: 'July 10, 2023', 
      location: 'Coffee Shop', 
      description: "Do you pride yourself on making the perfect latte? Can you create stunning designs on the frothy milk canvas? Then this is your chance to shine! Participate in our Latte Art Competition and pit your skills against fellow latte artists. The best part? You get to enjoy your beautiful (and delicious) creation when you're done!", 
      image: latteArt
    },
  ];
  