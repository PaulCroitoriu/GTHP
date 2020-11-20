import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: 600;
`;

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const List = ({ items, title }) => (
  <>
    <Title>{title}</Title>
    <ListWrapper>
      {items.map(({ label, value }) => (
        <ListItem key={label}>
          <Label>{label}</Label>
          {value}
        </ListItem>
      ))}
    </ListWrapper>
  </>
);

export default List;
