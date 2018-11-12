import React from 'react';

const User = (name = '') => (
    <div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text"> Welcome {name} !!!
        </span>
      </div>
    </div>
  </div>
 )

 export default User;