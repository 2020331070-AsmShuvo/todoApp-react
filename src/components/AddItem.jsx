import React, { useState } from "react";

const AddItem = ({getValuesFromList}) => {
  
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddOnClick = ()=> {
    const items ={
      todoName : item,
      todoDate : date,
      todoStartTime : startTime,
      todoEndTime : endTime
    }
    getValuesFromList(items);
    console.log(items);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-2/3 ">
            <tbody className="bg-gray-600">
              {/* row 1 */}
              <tr className="flex flex-col md:flex-row items-center justify-between">
                <td>
                  <input
                    type="text"
                    value={item}
                    onChange={ e =>setItem(e.target.value) }
                    placeholder="Item"
                    class="input input-bordered input-sm w-full max-w-xs"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    placeholder="Type here"
                    class="input input-bordered input-sm w-full max-w-xs"
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                    placeholder="Type here"
                    class="input input-bordered input-sm w-full max-w-xs"
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={endTime}
                    onChange={e => setEndTime(e.target.value)}
                    placeholder="Type here"
                    class="input input-bordered input-sm w-full max-w-xs"
                  />
                </td>
                <td>
                  <button onClick={handleAddOnClick} className="btn btn-xs btn-success">Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
