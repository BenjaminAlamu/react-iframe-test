import Iframe from "react-iframe";
import "./App.scss";

function App() {
  return (
    <div className="">
      <div className="">
        <div>
          <p>Iframe without Package</p>
          <div className="iframe-container">
            <iframe
              src="https://embed.restream.io/player/index.html?token=fce66ffe308ea688997cf73f38a35c70"
              width="100%"
              height="600"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <p>Iframe with Package</p>
          <Iframe
            url="https://embed.restream.io/player/index.html?token=fce66ffe308ea688997cf73f38a35c70"
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
