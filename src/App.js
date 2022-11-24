import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alexa" handle="@alexa55" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cort343" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siriii" image={SiriImage} />
    </div>
  );
}

export default App;
