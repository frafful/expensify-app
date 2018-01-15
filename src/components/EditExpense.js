import React from 'react';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      Edit expense component. ID: {props.match.params.id}
    </div>
  );
};
export default EditExpense;