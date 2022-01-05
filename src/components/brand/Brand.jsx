import React from 'react'
import './brand.css'

import {google, slack,atlassian,dropbox,shopify} from './imports'
const Brand = () => {
    return (
      <div className="gpt3__brand section__padding">
          <div>
              <img src={google} alt="google" srcset="" />
          </div>
          <div>
              <img src={slack} alt="slack" srcset="" />
          </div>

          <div>
              <img src={atlassian} alt="at<img src={atlassian" srcset="" />
          </div>

          <div>
              <img src={dropbox} alt="dropbox" srcset="" />
          </div>

          <div>
              <img src={shopify} alt="shopify" srcset="" />
          </div>



      </div>
    )
}

export default Brand
