import React from 'react'

const ThirdPartyVideoCard = ({className,Table}) => {
  return (
    <div className={`${className.form_page}`}>
      <div className={`${className.container} container`}>
        <div className={`${className.page_title}`}>
          <h4>Bulk Upload Third Party Video Creatives</h4>
        </div>
        <div className={`${className.form_box}`}>
          <form className={`${className.cretive_forms}`} encType="multipart/form-data">
            <Table className={`${className.bulk_table}`} responsive>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" id="selectall"  />
                    <label htmlFor="selectall" className={`${className.objective} cr`}></label>
                  </th>
                  <th>Creative Name</th>
                  <th>Video VAST Tag URL</th>
                  <th>Requires Ping for attribution (Optional)</th>
                  <th>Integration Code (Optional)</th>
                  <th>Notes (Optional)</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>
                    <input type="checkbox" />
                    <label className={`${className.objective} cr`}></label>
                  </td>
                  <td><input type="text" /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1:1</td>
                  <td></td>
                  <td><input type="url" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </tbody>
            </Table>
            <div className={`${className.bluk_dropzone}`}>
              <input type="file" id="sourceFile" name="sourceFile" accept="image/*" multiple />
              <p>To upload save your creative. You’ll also need editor or manager permissions for a YouTube channel on the Google account you use with Display & Video 360.</p>
            </div>
            <div className={`${className.audio_btns}`}>
              <div className={`${className.feilds_btns}`}>
                <button className={`${className.create_btn}`}>Save</button>
                <button className={`${className.cancel_btn}`}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ThirdPartyVideoCard;