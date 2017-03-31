import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  navigationLink,
  navigationLinkIcon,
  navigationLinkLink,
  active,
  navigationLinkLabel,
} from './NavigationLink.css';

const NavigationLink = (props) => {
  const activeClass = ((props.isActive === 'active') ? ` ${active}` : '');
  const classNameWithActive = `${navigationLinkLink} ${activeClass}`;

  return (
    <div className={navigationLink}>
      <a href={props.url} className={classNameWithActive}>
        <FontAwesome name={props.icon} size="2x" className={navigationLinkIcon} />
        <span className={navigationLinkLabel}>{ props.label }</span>
      </a>
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
