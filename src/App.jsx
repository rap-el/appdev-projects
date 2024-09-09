import Header from "./header";
import Body from "./Body";
import Footer from "./footer";

export default function App() {
  return (
    <>
      <Header />
      <Body 
        name=" William" 
        state="Full"
        thing="Name" 
        content="William Rap-El O. Ragel"
        imageUrl="will.jpeg" 
      />
      <Body 
        name=" William" 
        state="Favorite"
        thing="Artist" 
        content="Chappell Roan"
        imageUrl="roan.jpeg" 
      />
      <Body 
        name=" William"
        state="Favorite" 
        thing="Group" 
        content="NewJeans"
        imageUrl="nwjns.jpeg" 
      />
      <Body 
        name=" William" 
        state="Favorite"
        thing="Album" 
        content="BRAT"
        imageUrl="brat.jpeg" 
      />
      <Body 
        name=" William"
        state="Favorite" 
        thing="Food" 
        content="Spaghetti"
        imageUrl="spag.jpeg" 
      />
      <Footer />
    </>
  );
}
