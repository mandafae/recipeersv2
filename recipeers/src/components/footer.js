import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-shrink: 0;
  background-color: rgb(255, 255, 255, 0.8);
  width: 100vw;
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        Photo by{" "}
        <StyledLink
          href="https://unsplash.com/photos/y1XXWct5rBo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Lee Myungseong
        </StyledLink>{" "}
        on{" "}
        <StyledLink
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Unsplash
        </StyledLink>
        .
      </Wrapper>
    );
  }
}

export default Footer;
