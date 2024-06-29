import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import s from './maps.module.css';
import { mapPoints } from 'shared/mocks/mapPoints';

export const Maps = () => {
  return (
    <YMaps>
      <div className={s.map_container}>
        <Map
          width="100%"
          height="740px"
          defaultState={{
            center: [53.7, 108.0],
            zoom: 6.5,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={[
            'control.ZoomControl',
            'control.FullscreenControl',
            'geoObject.addon.balloon',
            'geoObject.addon.hint',
          ]}
        >
          {mapPoints.map(point => (
            <Placemark
              key={point.id}
              defaultGeometry={point.coordinates}
              properties={{
                // hintContent: point.hint,
                // iconCaption: "caption",
                // balloonContentHeader: `<a href = "${point.link}" class="map_link"><pre>${point.hint}</pre></a>`,
                
                balloonContentHeader: `<a href = "${point.link}" class="map_link"><pre>${point.hint}</pre></a>`,
                balloonContentBody: `<div class="map_content_body"} ><img src="${point.image}" class="map_image"  height="150" width="200"> <br/>
                <div class="description">${point.address}</div>
                <a href = "${point.link}" class="map_button">Подробнее</a></div>`,
                // balloonContentFooter: "footer"
              }}
              options={{
                iconLayout: 'default#image',
                iconColor: '#000', 
                // iconImageHref: myIcon,
                // iconImageSize: [40, 40],
                // iconImageOffset: [-20, -20]
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};