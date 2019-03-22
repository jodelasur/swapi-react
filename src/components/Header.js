import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  line-height: 24px;
  font-size: 16px;
  padding: 0 10px;
  justify-content: space-between;
`;

const HeaderSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  width: ${props => props.width};
  text-align: center;
`;

const Header = ({columns}) =>
    <HeaderDiv>
      {Object.keys(columns).map(key =>
          <HeaderSpan
              key={key}
              width={columns[key].width}
          >
            {columns[key].label}
          </HeaderSpan>
      )}
    </HeaderDiv>;

export default Header;