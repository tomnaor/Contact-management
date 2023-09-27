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
    tr {
      cursor: pointer;
    }

    tr:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;
