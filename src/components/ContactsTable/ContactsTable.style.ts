import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #dddddd;
    }

    tr {
      cursor: pointer;
    }

    tr:hover {
      background-color: lightblue;
    }
  }
`;
