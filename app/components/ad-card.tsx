export function AdCard(id: number) {
  const title = "Title";
  const description = "Description";
  const city = "Bergen";
  const location = "Bergen location";
  const createdAt = "2023-10-01";
  const startDate = "2023-10-01";
  const endDate = "2023-10-01";
  const userId = "12345";
  const isCompany = false;
  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p>{city}</p>
      <p>{location}</p>
      <p>Created at: {createdAt}</p>
      <p>Start date: {startDate}</p>
      <p>End date: {endDate}</p>
      <p>User ID: {userId}</p>
      <p>Is company: {isCompany ? "Yes" : "No"}</p>
    </div>
  );
}
