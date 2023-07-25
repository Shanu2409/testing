const filter = (data, dateFrom, dateTo) => {
  const datePartsTo = dateTo.split("-");
  const dayTo = parseInt(datePartsTo[0], 10);
  const monthTo = parseInt(datePartsTo[1], 10);
  const yearTo = parseInt(datePartsTo[2], 10);

  const datePartsFrom = dateFrom.split("-");
  const dayFrom = parseInt(datePartsFrom[0], 10);
  const monthFrom = parseInt(datePartsFrom[1], 10);
  const yearFrom = parseInt(datePartsFrom[2], 10);

  //console.log all the dates
  console.log(dayTo, monthTo, yearTo);
  console.log(dayFrom, monthFrom, yearFrom);

  const fromDate = new Date(yearFrom, monthFrom - 1, dayFrom); // Example start date: 24th January 2022
  const toDate = new Date(yearTo, monthTo - 1, dayTo); // Example end date: 14th February 2022

  console.log(fromDate, toDate);

  const filteredData = data.filter((item) => {
    const itemDateParts = item.Date.split("-");
    const itemDate = new Date(
      parseInt(itemDateParts[2]),
      parseInt(itemDateParts[1]) - 1,
      parseInt(itemDateParts[0])
    );
    return itemDate >= fromDate && itemDate <= toDate;
  });

  return filteredData;
};

const data = [
    {
        "_id": "64a6d63e3f760b9c9ee2a4c9",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c7",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c6",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c8",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c4",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c2",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c3",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c5",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b9",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b4",
        "Date": "10-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a9",
        "Date": "9-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b1",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a8",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a0",
        "Date": "7-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a1",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4bc",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4ad",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4be",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4bf",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4ba",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b0",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4af",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b7",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b5",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a5",
        "Date": "10-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4bd",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4bb",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b2",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4ab",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4ac",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4ae",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a3",
        "Date": "8-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a6",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4aa",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c1",
        "Date": "24-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet & No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b8",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b6",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a7",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4b3",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a4",
        "Date": "7-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4a2",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a4c0",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49e",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49f",
        "Date": "8-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49d",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49c",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49b",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a495",
        "Date": "11-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a496",
        "Date": "9-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a497",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a49a",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a498",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a494",
        "Date": "11-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a493",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a499",
        "Date": "11-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48d",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48c",
        "Date": "09-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a485",
        "Date": "11-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48b",
        "Date": "08-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48f",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Helmet"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a488",
        "Date": "8-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a483",
        "Date": "10-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a484",
        "Date": "12-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a490",
        "Date": "07-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48e",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a489",
        "Date": "11-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a48a",
        "Date": "13-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a486",
        "Date": "7-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a491",
        "Date": "10-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a487",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a492",
        "Date": "14-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a482",
        "Date": "8-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    },
    {
        "_id": "64a6d63e3f760b9c9ee2a481",
        "Date": "10-06-2023",
        "Usecase": "Safety",
        "Class": "No Vest"
    }
]

console.log(filter(data,));