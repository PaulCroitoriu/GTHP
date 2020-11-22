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
  --x: 50%;
  --y: 50%;

  position: relative;
  appearance: none;
  padding: 1em 2em;
  margin-bottom: 0.2em;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  border: 2px solid transparent;
  background: linear-gradient(#282c34, #000) padding-box,
    radial-gradient(farthest-corner at var(--x) var(--y), #00c9a7, #845ec2)
      border-box;
`;

const Label = styled.span`
  font-weight: 600;
`;

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const onMouseMove = e => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

const List = ({ items, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <ListWrapper>
        {items.map(({ label, value }) => {
          return (
            <ListItem onMouseMove={onMouseMove} key={label}>
              <Label>{label}</Label>
              {value}
            </ListItem>
          );
        })}
      </ListWrapper>
    </>
  );
};

export default List;
