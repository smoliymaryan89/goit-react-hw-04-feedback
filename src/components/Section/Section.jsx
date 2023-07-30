import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <SectionWrap>
        <h1>{title}</h1>
        {children}
      </SectionWrap>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
