import React from "react";

const List = ({item}) => {
  const {todoName,todoDate,todoStartTime,todoEndTime} = item;
  // console.log("name: ", todoName);
  if(todoName.length <=0 || todoDate.length<=0 || todoEndTime.length<=0 || todoDate.length<=0){
    return;
  }
  return (
    <div>
      <div className="overflow-x-auto w-2/3 bg-gray-800">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr className="flex items-center justify-between">
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{todoName}</div>
                  </div>
                </div>
              </td>
              <td>{todoDate}</td>
              <td>{todoStartTime}</td>
              <td>{todoEndTime}</td>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
