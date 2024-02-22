import React from 'react';
import { ImageTypePhysicalNamees } from '@/component/common';

function VideoCard({ data, className }) {
  return (
    <div className={`${className.card_box}`}>
      <div className={`${className.card_main} card`}>
        <div className={`${className.card_media}`}>
          <video width="270" height="200" controls>
            <source src={data.vast_tag_url ? data.vast_tag_url : '/movie.mp4'} type="video/mp4" />
          </video>
        </div>
        <div className="card-body row align-items-center">
          <h4 className="card-title">{data.name}</h4>
          <p className="card-text">{ImageTypePhysicalNamees(data.creative_upload_type)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
