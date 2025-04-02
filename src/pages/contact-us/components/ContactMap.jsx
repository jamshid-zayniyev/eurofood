import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactMap = () => {
  // w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]
  return (
    <div className="absolute w-[280px] h-[280px] md:w-[180px] md:h-[180px] lg:h-[330px] lg:w-[330px]  xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] rounded-full  overflow-hidden ">
      {/* <CircularText text="CONTACTS BOG'LANISH КОНТАКТЫ CO КОНТАКТЫ " /> */}
      <MapContainer center={[41.25336, 69.14137]} zoom={13} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.25336, 69.14137]} icon={customIcon}>
          <Popup>
            Tashkent
          </Popup>
        </Marker>
      </MapContainer>
      
    </div>
  );
};

export default ContactMap;

