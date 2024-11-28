import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { socialLogin } from '../../app/actions';

const SocialLogin = () => {
    return (
      <form action={socialLogin}>
        <button type="submit" name="action" value="google">
          <FcGoogle className="text-3xl" />
        </button>
      </form>
    );
};

export default SocialLogin;