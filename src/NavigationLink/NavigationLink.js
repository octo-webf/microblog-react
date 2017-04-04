import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import {
  navigationLink,
  navigationLinkIcon,
  navigationLinkLink,
  active,
  navigationLinkLabel,
} from './NavigationLink.css';

const NavigationLink = (props) => {
  const linkClassNames = [navigationLinkLink];
  if (props.isActive) {
    linkClassNames.push(active);
  }
  if (props.icon === 'power-off') {
    linkClassNames.push('navigation-bar__link--logout');
  }

  return (
    <div className={navigationLink}>
      <Link to={props.url} className={linkClassNames.filter(Boolean).join(' ')}>
        <FontAwesome name={props.icon} size="2x" className={navigationLinkIcon} />
        <span className={`${navigationLinkLabel} navLinkLabel`}>{ props.label }</span>
      </Link>
    </div>
  );
};

NavigationLink.propTypes = {
  url: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.string.isRequired,
};

export default NavigationLink;
