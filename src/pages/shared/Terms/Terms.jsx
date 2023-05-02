import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4>Terms and conditions</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Officiis sequi perferendis earum voluptatem modi 
                 asperiores repudiandae sapiente, deleniti reiciendis,
                  quasi quo repellat dolor suscipit. Ullam 
                neque repellat consequuntur quia temporibus.</p>
                <p>Go back to <Link to="/register" >Register</Link></p>
        </div>
    );
};

export default Terms;