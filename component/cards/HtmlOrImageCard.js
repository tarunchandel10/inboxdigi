import React from 'react';
import { ImageTypePhysicalNamees } from '@/component/common';

function HtmlOrImageCard({ data, className }) {
  return (
    <div className={`${className.card_box}`}>
      <div className={`${className.card_main} card`}>
        <div className={`${className.card_media}`}>
          <img src={data.main_asset_file ? data.main_asset_file : "/images/show_talent.png"} alt="Picture of the author" className="w-100" />
        </div>
        <div className={`${className.card_body} card-body row align-items-center`}>
            <h4 className="card-title">{data.name != '' ? data.name : 'Unknown'} . <span>{data.dimension != '' ? data.dimension : '970*250'}</span></h4>
            <p className="card-text">{ImageTypePhysicalNamees(data.creative_upload_type)}</p> 
        </div>
      </div>
    </div>
  );
}

export default HtmlOrImageCard;
