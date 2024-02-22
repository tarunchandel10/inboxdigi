import React from 'react';
import { ImageTypePhysicalNamees } from '@/component/common';

function AudioCard({ data, className }) {
  return (
    <div className={`${className.card_box}`}>
      <div className={`${className.card_main} card`}>
        <div className={`${className.card_media}`}>
          <img src={data.asset_source_file ? data.asset_source_file : '/images/fake-image.png'} alt="" className={`${className.audio_img}`} />
          <audio controls>
            <source src={data.main_asset_file ? data.main_asset_file : ''} type="audio/mp3" />
          </audio>
        </div>
        <div className="card-body row align-items-center">
          <h4 className="card-title">{data.name} {data.id}</h4>
          <p className="card-text">{ImageTypePhysicalNamees(data.creative_upload_type)}</p>
        </div>
      </div>
    </div>
  );
}

export default AudioCard;
