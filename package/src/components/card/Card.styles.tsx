import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  a {
    text-decoration: none;
    color: #000000;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const ImageLinkContainer = styled((props: any) => <Link {...props} />)`
  margin-bottom: 10px;
  display: flex;
  text-wrap: wrap;
  text-decoration: none;
`;
