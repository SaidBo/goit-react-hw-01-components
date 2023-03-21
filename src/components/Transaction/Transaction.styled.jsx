import styled from '@emotion/styled';

export const TransactionsWraper = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 16px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 14px;
`;

export const TransactionsTableItem = styled.tr`
    text-align: center;
    height: 50px;
    :nth-of-type(2n) {
    border: 1px solid #c2c2c2;
    border-top: none;
    background-color: lightgrey;
    }
`;

// export const Container = styled.
// export const Container = styled.
// export const Container = styled.



//   .transaction-history tr:nth-child(even) {
//     background-color: #f9f9f9;
//   }

//   .transaction-history tr:hover {
//     background-color: #f5f5f5;
//   }
