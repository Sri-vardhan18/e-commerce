import Google_Pixel_7 from "../Images/Google_Pixel_7.webp";
import Google_Pixel from "../Images/Google_Pixel.png";
import Real_me_11_pro_5G from "../Images/Real_me_11_pro_5G.webp";
import sumsung from "../Images/sumsung.jpg";
import redmi_note_8 from "../Images/redmi_note_8.png";
import RedMi_Note from "../Images/RedMi_Note.png";

import ProductItems from "./ProductItems";
import Cart from "./NavBar/Cart";

const products = [
  {
    id: 1,
    Image: Google_Pixel,
    Title: "Google_Pixel",
    amount: "24000",
  },
  {
    id: 2,
    Image: Google_Pixel_7,
    Title: "Goodle Pixel 7",
    amount: "25000",
  },
  {
    id: 3,
    Image: Real_me_11_pro_5G,
    Title: "Real_me_11_pro_5G",
    amount: "22000",
  },
  {
    id: 4,
    Image: sumsung,
    Title: "sumsung",
    amount: "18000",
  },
  {
    id: 5,
    Image: redmi_note_8,
    Title: "redmi_note_8",
    amount: "15000",
  },
  {
    id: 6,
    Image: RedMi_Note,
    Title: "RedMi_Note",
    amount: "12000",
  }
];

const Home = () => {
console.log("home")
  return (
    <>
        <div><Cart /></div>
   
      <div className="flex flex-wrap max-w-600">
        {products.map((item) => (
          <ProductItems
            key={item.id}
            id={item.id}
            Image={item.Image}
            amount={item.amount}
            Title={item.Title}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
