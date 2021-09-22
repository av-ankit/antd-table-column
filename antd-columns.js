import "./antdTable.css";

const getFullDate = (date) => {
  let dateAndTime = date;
  let year = dateAndTime.slice(0, 4);
  let month = dateAndTime.slice(4, 6);
  let day = dateAndTime.slice(6, 8);
  let hours = dateAndTime.slice(8, 10);
  let mins = dateAndTime.slice(10, 12);
  let secs = dateAndTime.slice(12, 14);
  if (date) return `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
  else return `--`;
};

const orderDateCalc = (date) => {
  let dateAndTime = date;
  let year = dateAndTime.slice(0, 2);
  let month = dateAndTime.slice(2, 4);
  let day = dateAndTime.slice(4, 6);
  if (date) return `${year}-${month}-${day}`;
  else return `--`;
};

const nextExpStartCalc = (date) => {
  if (date) {
    // console.log("NEXT", typeof date[0], date.length, date);
    console.log("nextDate", date.sort());
    let dateAndTime = date[0];
    let year = dateAndTime.slice(0, 4);
    let month = dateAndTime.slice(4, 6);
    let day = dateAndTime.slice(6, 8);
    let hours = dateAndTime.slice(8, 10);
    let mins = dateAndTime.slice(10, 12);
    let secs = dateAndTime.slice(12, 14);
    return `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
    //  return `next id-0 ${year}-${month}-${day} ${hours}:${mins}:${secs}`;
  } else return `--`;
};
export const tableColumns = [
  //   {
  //     dataIndex: "id",
  //     title: "ID",

  //     width: 50,
  //     align: "center",
  //   },
  {
    dataIndex: "name",
    title: "Job Name",
    width: 150,

    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },
  {
    dataIndex: "status",
    title: "Status",
    width: 80,
    // sorting alphabetically
    sorter: (a, b) => a.status.localeCompare(b.status),
    sortDirections: ["ascend", "descend"],
    render(text, record) {
      return {
        // controlling cell bg color

        props: {
          style: {
            color:
              text === "Ended Not OK"
                ? "white"
                : text === "Executing"
                ? "white"
                : text === "Ended OK"
                ? "white"
                : null,
            background:
              text === "Ended Not OK"
                ? "#ED2939"
                : text === "Executing"
                ? "#0066b2"
                : text === "Ended OK"
                ? "#00A877"
                : null,
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    dataIndex: "application",
    title: "Application",
    width: 60,
    responsive: ["md"], //medium or bigger screens
  },

  {
    dataIndex: "description",
    title: "Description",
    width: 100,
  },
  {
    dataIndex: "startTime",
    title: "Last Start Time ",
    width: 100,

    sorter: (a, b) => a.startTime - b.startTime,
    sortDirections: ["ascend", "descend"],
    render: (startTime) => getFullDate(startTime),
  },

  {
    dataIndex: "endTime",
    title: "Last End Time",
    width: 100,
    sorter: (a, b) => a.endTime - b.endTime,
    sortDirections: ["ascend", "descend"],
    render: (endTime) => getFullDate(endTime),
  },
  {
    dataIndex: "orderDate",
    title: "Order Date",
    ellipsis: true,
    width: 100,
    sorter: (a, b) => a.orderDate - b.orderDate,
    sortDirections: ["ascend", "descend"],
    render: (orderDate) => orderDateCalc(orderDate),
  },
  {
    dataIndex: "estimatedStartTime",
    title: "Nxt Exp Start",
    width: 100,
    // sorter: (a, b) => a.estimatedStartTime - b.estimatedStartTime,
    // sortDirections: ["ascend", "descend"],
    render: (estimatedStartTime) => nextExpStartCalc(estimatedStartTime),
  },
  {
    dataIndex: "held",
    title: "Held",
    width: 60,
    sorter: (a, b) => a.held - b.held,
    sortDirections: ["ascend", "descend"],
    render(text, record) {
      return {
        // controlling cell content
        children:
          text === false ? (
            <div> No</div>
          ) : text === true ? (
            <div> Yes</div>
          ) : (
            "Data Not Available"
          ),
      };
    },
  },
  {
    dataIndex: "deleted",
    title: "Deleted",
    width: 60,
    sorter: (a, b) => a.deleted - b.deleted,
    sortDirections: ["ascend", "descend"],
    render(text, record) {
      return {
        // controlling cell content
        children:
          text === false ? (
            <div> No</div>
          ) : text === true ? (
            <div> Yes</div>
          ) : (
            "Data Not Available"
          ),
      };
    },
  },
];
