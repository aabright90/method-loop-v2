import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import loginIcon from "../../assets/icons/login.svg";
import arrowRightIcon from "../../assets/icons/arrowRight.svg"

export const LoginButton = ({ route, id }) => {
  return (
    <>
      <Link href={route}>
        <button id={id} className={id}>
          <div className="button-icon">
            <Image src={loginIcon} alt="Login" />
          </div>
          <div className="button-text">Log In</div>
        </button>
      </Link>
    </>
  );
};

export const TrialButton = ({ text, route, id }) => {
  return (
    <>
      <Link href={route}>
        <button id={id} className={id}>
          <div className="button-text">{text}</div>
        </button>
      </Link>
    </>
  );
};

export const ActionCallArrowRight = ({ text, route }) => {
  return (
    <>
      <Link href={route}>
        <button id="action-call" className="action-call">
          <div className="button-text">{text}</div>
          <div className="button-icon">
            <Image src={arrowRightIcon} alt="actionCall" />
          </div>
        </button>
      </Link>
    </>
  );
};

export const ActionCall = ({ text, route, className = "" }) => {
  return (
    <>
      <Link href={route}>
        <button id="action-call" className={`action-call ${className}`}>
          <p className="button-text">{text}</p>
        </button>
      </Link>
    </>
  );
};
