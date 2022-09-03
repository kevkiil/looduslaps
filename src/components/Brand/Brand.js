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
      
          
    
     <svg
        width={127}
        height={23}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >


    
    <text x="50" y="50" font-family="Arial">Arial</text>
    <text x="100" y="50" font-family="Arial Black">Arial Black</text>
    <text x="205" y="50" font-family="Helvetica">Helvetica</text>




      </svg>


      
    </div>
  );
};

export default Brand;
