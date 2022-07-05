import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './Logo';
import { toggleSidebar } from '../features/user/userSlice';
export const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
      </div>
      <div>
        <Logo />
        <h3 className="logo-text">dashboard</h3>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => console.log('toggle logout dropdown')}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
        <div className="dropdown show-dropdown">
          <button
            type="button"
            className="dropdown-btn"
            onClick={() => console.log('hello drop')}
          >
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
