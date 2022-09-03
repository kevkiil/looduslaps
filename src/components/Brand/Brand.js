import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      
          
    
    <text x="205" y="50" font-family="Looduslaps">Helvetica</text>


      
    </div>
  );
};

export default Brand;
