import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyleFooter>
      Made in <span>2run2jo</span>
    </StyleFooter>
  );
}

export default Footer;

const StyleFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1em;
  text-align: center;

  > span {
    font-weight: 900;
  }
`;
