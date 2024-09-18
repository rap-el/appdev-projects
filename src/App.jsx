import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <Body 
        name="Model: KB X1000" 
        imageUrl="will.jpeg" 
        content=" "
      />
      <Body 
        name="Specifications" 
        content=" 
        \n● Switch Type: Cherry MX Red (Mechanical)'\n'
        ● Key Layout: Full-size (104 keys)\n
        ● Backlighting: RGB with customizable colors\n
        ● Connectivity: Wired (USB 2.0)\n
        ● Dimensions: 440 mm x 135 mm x 35 mm\n
        ● Weight: 1.2 kg\n
        ● Cable Length: 1.8 meters\n
        ● Additional Features: Anti-ghosting, N-key rollover, dedicated media controls\n
        "
      />
       <Body 
        name="Key Fuctions"  
        content=" 
        Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors 
        and lighting effects.
        Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.
        Programmable Keys: Assign macros and custom functions to any key with the included software.
        Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming 
        sessions.
        Dedicated Media Controls: Easily control music and videos with dedicated media keys.
        "
      />
       <Body 
        name="In the Box" 
        imageUrl="will.jpeg" 
        content=" 
        ● KB-X1000 Keyboard
● USB Cable
● User Manual
● Keycap Removal Tool
● Warranty Card
        "
      />
       <Body 
        name="Setup" 
        imageUrl="will.jpeg" 
        content=" 
        Unboxing:
● Carefully remove the keyboard and accessories from the box.
Connecting the Keyboard:
● Plug the USB cable into an available USB port on your computer.
● The keyboard should be automatically recognized and ready for use. No additional drivers are 
required.
Software Installation (Optional):
Page 3 of 4
● Download the configuration software from the manufacturer’s website if you wish to customize 
key functions or lighting.
● Follow the on-screen instructions to install the software.
        "
      />
       <Body 
        name="Keyboard" 
        imageUrl="will.jpeg" 
        content=" 
        Basic Typing:
● Simply start typing; the keyboard is pre-configured with standard key mappings.
Customizing Backlighting:
● Press Fn + F9 to cycle through preset lighting effects.
● Use the configuration software to create custom lighting profiles.
Programming Keys:
● Open the configuration software.
● Select the key you want to program.
● Assign a macro or function and save your changes.
Using Media Controls:
● Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.
        "
      />
       <Body 
        name="Troubleshooting"  
        content=" 
        Keyboard Not Responding:
● Ensure the USB connection is secure.
● Try connecting the keyboard to a different USB port.
● Restart your computer if necessary.
Backlighting Not Working:
● Check if the backlight is disabled or set to a minimal brightness level.
● Verify that the configuration software is properly installed.
Key Not Registering:
● Confirm that no physical obstructions are affecting the key.
● Test the key in different applications to determine if the issue is software-related.
        "
      />
       <Body 
        name="Maintenance and Care" 
        content=" 
        
        Cleaning:
        ● Disconnect the keyboard from the computer.
        ● Use a soft, dry cloth to clean the surface.
        ● For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.
        Page 4 of 4
        Storage:
        ● Store the keyboard in a cool, dry place.
        ● Avoid exposure to liquids or extreme temperatures.
        Warranty and Support
        ● Warranty Period: 2 years from the date of purchase.
        ● Customer Support: For assistance, contact customer support via the manufacturer’s website 
        or call the support hotline at 1-800-555-1234.
        Manufacturer’s Website: www.keyboardcompany.com
        Customer Support Email: support@keyboardcompany.com
        Support Hotline: 1-800-555-1234
        “Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!”
        "
      />

      
      <Footer />
    </>
  );
}