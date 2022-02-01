import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import './Location.css';
import { useTranslation } from 'react-i18next';

const Map = ({ children, style, ...options }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  const [info, setInfo] = React.useState();


  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
      setInfo(new window.google.maps.InfoWindow());
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {

    const generateNavigateTo = (link, text) => {
      return `<p><a href=${link}>${text}</a></p>`;
    }

    if (marker) {
      marker.setOptions(options);
      marker.addListener("click", () => {
        info.setContent(marker.name + generateNavigateTo(marker.link, marker.navigate));
        info.open(marker.getMap(), marker);
      });
    }
  }, [marker, info, options]);

  return null;
};

const Location = ({ center, church, celebration, zoom }) => {
  const { t } = useTranslation();

  const navigate = t('location.navigate');
  return (
    <div className='location'>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map center={center} zoom={zoom} style={{ flexGrow: "1", height: "100%" }}>
          <Marker position={church.position} label={church.label} name={church.name} link={church.link} navigate={navigate}/>
          <Marker position={celebration.position} label={celebration.label} name={celebration.name} link={celebration.link} navigate={navigate}/>
        </Map>
      </Wrapper>
    </div>
  )
}

export default Location;